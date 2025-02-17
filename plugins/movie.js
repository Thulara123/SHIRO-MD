const { cmd } = require('../command');
const { fetchJson } = require('../lib/functions');
const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const config = require('../config');

const API_URL = "https://api.skymansion.site/movies-dl/search";
const DOWNLOAD_URL = "https://api.skymansion.site/movies-dl/download";
const API_KEY = config.MOVIE_API_KEY;

cmd({
    pattern: "movie",
    alias: ["moviedl", "films"],
    react: '🎬',
    category: "download",
    desc: "Search and download movies from PixelDrain",
    filename: __filename
}, async (robin, m, mek, { from, q, reply }) => {
    try {
        if (!q || q.trim() === '') return await reply('鉂� Please provide a movie name! (e.g., Deadpool)');

        // Fetch movie search results
        const searchUrl = `${API_URL}?q=${encodeURIComponent(q)}&api_key=${API_KEY}`;
        let response = await fetchJson(searchUrl);

        if (!response || !response.SearchResult || !response.SearchResult.result.length) {
            return await reply(`鉂� No results found for: *${q}*`);
        }

        const selectedMovie = response.SearchResult.result[0]; // Select first result
        const detailsUrl = `${DOWNLOAD_URL}/?id=${selectedMovie.id}&api_key=${API_KEY}`;
        let detailsResponse = await fetchJson(detailsUrl);

        if (!detailsResponse || !detailsResponse.downloadLinks || !detailsResponse.downloadLinks.result.links.driveLinks.length) {
            return await reply('鉂� No PixelDrain download links found.');
        }

        // Send movie details first
        const movieDetails = `
            *Title*: ${selectedMovie.title}
            *Description*: ${selectedMovie.description || "No description available."}
            *Release Year*: ${selectedMovie.year}
            *Quality Options*: ${detailsResponse.downloadLinks.result.links.driveLinks.map(link => `${link.quality} - ${link.size}`).join(", ")}
        `;
        
        await reply(movieDetails + '\n\nDo you want to download this movie? Reply with "Yes" to confirm.');

        // Wait for user response (Yes or No)
        const collector = await robin.createMessageCollector({
            filter: msg => msg.from === from && msg.text.toLowerCase() === 'yes',
            time: 60000 // 60 seconds for reply
        });

        collector.on('collect', async (msg) => {
            // Proceed with downloading the movie
            const selectedDownload = detailsResponse.downloadLinks.result.links.driveLinks.find(link => link.quality === "SD 480p");
            
            if (!selectedDownload || !selectedDownload.link.startsWith('http')) {
                return await reply('鉂� No valid 480p PixelDrain link available.');
            }

            // Convert to direct download link
            const fileId = selectedDownload.link.split('/').pop();
            const directDownloadLink = `https://pixeldrain.com/api/file/${fileId}?download`;

            // Download movie
            const filePath = path.join(__dirname, `${selectedMovie.title}-480p.mp4`);
            const writer = fs.createWriteStream(filePath);
            
            const { data } = await axios({
                url: directDownloadLink,
                method: 'GET',
                responseType: 'stream'
            });

            data.pipe(writer);

            writer.on('finish', async () => {
                await robin.sendMessage(from, {
                    document: fs.readFileSync(filePath),
                    mimetype: 'video/mp4',
                    fileName: `${selectedMovie.title}-480p.mp4`,
                    caption: `馃幀 *${selectedMovie.title}*\n馃搶 Quality: 480p\n鉁� *Download Complete!*`,
                    quoted: mek 
                });
                fs.unlinkSync(filePath);
            });

            writer.on('error', async (err) => {
                console.error('Download Error:', err);
                await reply('鉂� Failed to download movie. Please try again.');
            });
        });

        collector.on('end', (collected, reason) => {
            if (reason === 'time') {
                robin.sendMessage(from, '鉂� No response received. Movie download canceled.');
            }
        });
    } catch (error) {
        console.error('Error in movie command:', error);
        await reply('鉂� Sorry, something went wrong. Please try again later.');
    }
});
