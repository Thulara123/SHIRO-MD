const { cmd } = require('../command'); // Assuming you're using a command handler

// Example movie download links data
const movieDownloads = {
    "inception": {
        title: "Inception",
        downloadLink: "https://example.com/inception-movie-download",
    },
    "the dark knight": {
        title: "The Dark Knight",
        downloadLink: "https://example.com/the-dark-knight-download",
    },
    "interstellar": {
        title: "Interstellar",
        downloadLink: "https://example.com/interstellar-movie-download",
    },
    "the godfather": {
        title: "The Godfather",
        downloadLink: "https://example.com/the-godfather-download",
    }
};

// Command to fetch movie download link
cmd({
    pattern: "moviedl",
    react: '🎬',
    category: "movies", // category of the command
    desc: "Get movie download link",
    use: '.moviedownload <movie_name>', // usage guide
    filename: __filename
},
async (conn, mek, m, { from, reply, q }) => {
    try {
        // Check if a movie name was provided
        if (!q) {
return reply("⛔ Please provide the name of the movie. Usage: .moviedownload <movie_name>");
        }

        // Normalize the input movie name (case-insensitive search)
        const movie = movieDownloads[q.toLowerCase()];
        
        // Check if the movie exists in the predefined list
        if (!movie) {
            return reply(`⛔ Movie not found. Please try another movie name.`);
        }

        // Send movie download link
        const message = `
        🎬 *Movie Download Link:*

        Title: movie.title
        Download Here: [{movie.title} Download](${movie.downloadLink})
        `;

        // Send the movie download link
        reply(message);
    } catch (e) {
        console.error(e);
        reply("😓 Something went wrong while fetching the movie download link.");
    }
});
