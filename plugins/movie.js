const axios = require('axios');
const { MessageMedia } = require('whatsapp-web.js');
const fs = require('fs');
const path = require('path');

// TMDB API key (https://www.themoviedb.org/settings/api)
const TMDB_API_KEY = '1b4ec5a4c152b906eea3b01f2b8435ad';

// Function to search for movies
async function searchMovie(query) {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`
        );
        return response.data.results;
    } catch (error) {
        console.error(`Error searching for movies: ${error.message}`);
        throw error;
    }
}

// Function to get movie details
async function getMovieDetails(movieId) {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}`
        );
        return response.data;
    } catch (error) {
        console.error(`Error fetching movie details: ${error.message}`);
        throw error;
    }
}

// Function to get movie trailer
async function getMovieTrailer(movieId) {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${TMDB_API_KEY}`
        );
        const trailers = response.data.results.filter(
            (video) => video.type === 'Trailer' && video.site === 'YouTube'
        );
        return trailers.length > 0 ? trailers[0].key : null;
    } catch (error) {
        console.error(`Error fetching movie trailer: ${error.message}`);
        throw error;
    }
}

// Function to download movie file (example: from a third-party source)
async function downloadMovieFile(movieTitle) {
    try {
        // Replace this with actual logic to download the movie file
        // For now, we'll just create a dummy file
        const filePath = path.join(__dirname, `${movieTitle}.mp4`);
        fs.writeFileSync(filePath, 'This is a dummy movie file.');
        return filePath;
    } catch (error) {
        console.error(`Error downloading movie file: ${error.message}`);
        throw error;
    }
}

// Function to handle movie command
async function handleMovieCommand(message, client) {
    const query = message.body.split('.movie ')[1];

    if (!query) {
        client.sendMessage(message.from, 'Please provide a movie name. Example: .movie Inception');
        return;
    }

    try {
        // Search for movies
        const movies = await searchMovie(query);

        if (movies.length === 0) {
            client.sendMessage(message.from, 'No movies found. Please try another name.');
            return;
        }

        // Get details of the first movie
        const movie = movies[0];
        const details = await getMovieDetails(movie.id);
        const trailerKey = await getMovieTrailer(movie.id);

        // Prepare the response
        let response = `🎬 *${details.title}* (${details.release_date.split('-')[0]})\n\n`;
        response += `⭐ Rating: ${details.vote_average}/10\n`;
        response += `📅 Release Date: ${details.release_date}\n`;
        response += `🌐 Language: ${details.original_language.toUpperCase()}\n`;
        response += `📖 Overview: ${details.overview}\n\n`;

        if (trailerKey) {
            response += `🎥 Trailer: https://www.youtube.com/watch?v=${trailerKey}\n`;
        }

        // Send poster if available
        if (details.poster_path) {
            const posterUrl = `https://image.tmdb.org/t/p/w500${details.poster_path}`;
            const media = await MessageMedia.fromUrl(posterUrl);
            client.sendMessage(message.from, media, { caption: response });
        } else {
            client.sendMessage(message.from, response);
        }

        // Download and send the movie file as a document
        const movieFilePath = await downloadMovieFile(details.title);
        const movieMedia = MessageMedia.fromFilePath(movieFilePath);
        client.sendMessage(message.from, movieMedia, { sendMediaAsDocument: true });

        // Delete the dummy file after sending
        fs.unlinkSync(movieFilePath);
    } catch (error) {
        console.error(`Error handling movie command: ${error.message}`);
        client.sendMessage(message.from, 'An error occurred. Please try again later.');
    }
}

module.exports = {
    handleMovieCommand
};
