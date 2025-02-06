const { cmd } = require('../command'); // Command handler
const fs = require('fs');
const path = require('path');

// Example Movie Download Links (These are just placeholders)
const movieDownloads = {
    "inception": {
        title: "Inception",
        videoUrl: "https://example.com/inception-movie.mp4", // Movie video URL (this should point to a video file)
    },
    "the dark knight": {
        title: "The Dark Knight",
        videoUrl: "https://example.com/the-dark-knight.mp4",
    },
    "interstellar": {
        title: "Interstellar",
        videoUrl: "https://example.com/interstellar-movie.mp4",
    },
    "the godfather": {
        title: "The Godfather",
        videoUrl: "https://example.com/the-godfather.mp4",
    }
};
// Command to fetch and send movie download link
cmd({
    pattern: "moviedownload",
    react: '🎬',
    category: "movies",
    desc: "Get movie download video file",
    use: '.moviedownload <movie_name>', // Command usage
    filename: __filename
},
async (conn, mek, m, { from, reply, q }) => {
    try {
        // Check if the user has provided the movie name
        if (!q) {
            return reply("⛔ Please provide the movie name. Usage: .moviedownload <movie_name>");
        }

        // Normalize the input movie name (case-insensitive search)
        const movie = movieDownloads[q.toLowerCase()];
        
        // Check if the movie exists in the predefined list
        if (!movie) {
            return reply(`⛔ Movie not found. Please try another movie name.`);
        }

        // Check if the video file URL is valid
        if (!movie.videoUrl) {
            return reply(`⛔ Sorry, no download link is available for this movie.`);
        }

        // Send the movie video file as a document (if the URL points to a video file)
        const videoFileName = `${movie.title}.mp4`;
        const videoFilePath = path.join(__dirname, videoFileName);

        // Assuming the video file exists on the server or you have a working video URL
// For this example, I'm using a placeholder URL
        conn.sendMessage(from, 
            video:  url: movie.videoUrl ,
            mimetype: 'video/mp4',
            caption: `🎬 *Movie Download:{movie.title}*`
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply("😓 Something went wrong while fetching the movie video.");
    }
});
