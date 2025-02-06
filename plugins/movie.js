const { cmd } = require('../command'); // Assuming you're using a command handler

// Example movies data
const movies = {
    "inception": {
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        genre: "Sci-Fi, Thriller",
        plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        imdb: "https://www.imdb.com/title/tt1375666/"
    },
    "the dark knight": {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        year: 2008,
        genre: "Action, Crime, Drama",
        plot: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, forcing Batman to consider his own role in the battle against crime.",
        imdb: "https://www.imdb.com/title/tt0468569/"
    },
    "interstellar": {
        title: "Interstellar",
        director: "Christopher Nolan",
        year: 2014,
        genre: "Adventure, Drama, Sci-Fi",
        plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        imdb: "https://www.imdb.com/title/tt0816692/"
    },
"the godfather": {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: 1972,
        genre: "Crime, Drama",
        plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        imdb: "https://www.imdb.com/title/tt0068646/"
    }
};

// Command to fetch movie details
cmd({
    pattern: "movie",
    react: '🎬',
    category: "movies", // category of the command
    desc: "Get movie details",
    use: '.movie <movie_name>', // usage guide
    filename: __filename
},
async (conn, mek, m, { from, reply, q }) => {
    try {
        // Check if a movie name was provided
        if (!q) {
            return reply("⛔ Please provide the name of the movie. Usage: .movie <movie_name>");
        }

        // Normalize the input movie name (case-insensitive search)
        const movie = movies[q.toLowerCase()];
        
        // Check if the movie exists in the predefined list
        if (!movie) {
            return reply(`⛔ Movie not found. Please try another movie name.`);
        }

        // Send movie details
        const message = `
        🎬 *Movie Details:*

        Title: movie.title
        Director:{movie.director}
        Year: movie.year
        Genre:{movie.genre}
        Plot: movie.plot
        IMDb: [{movie.title}](${movie.imdb})
        `;

        // Send the movie details message
        reply(message);
    } catch (e) {
        console.error(e);
        reply("😓 Something went wrong while fetching the movie details.");
    }
});
