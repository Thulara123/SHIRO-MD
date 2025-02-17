const { cmd } = require('../command');

try {
    if (!response || !response.SearchResult || !response.SearchResult.result.length) {
        return await reply(`❌ No results found for: *${q}*`);
    }

    const selectedMovie = response.SearchResult.result[0]; // Select first result
    const detailsUrl = `${DOWNLOAD_URL}/?id=${selectedMovie.id}&api_key=${API_KEY}`;
    let detailsResponse = await fetchJson(detailsUrl);

    // Intentional error: Missing or broken URL for details APIconst { cmd } = require('../command');

// Ensure that the function is async to allow the use of 'await'
async function movieCommand(q) {
    try {
        // Simulating a case where response is not properly fetched
        if (!response || !response.SearchResult || !response.SearchResult.result.length) {
            // Intentional error: 'await' used outside of an async function
            return await reply(`❌ No results found for: *${q}*`);
        }

        const selectedMovie = response.SearchResult.result[0]; // Select first result
        const detailsUrl = `${DOWNLOAD_URL}/?id=${selectedMovie.id}&api_key=${API_KEY}`;
        let detailsResponse = await fetchJson(detailsUrl);

        if (!detailsResponse || !detailsResponse.downloadLinks || !detailsResponse.downloadLinks.result.links.driveLinks.length) {
            return await reply('❌ No PixelDrain download links found.');
        }

        // Select the 480p PixelDrain link
        const pixelDrainLinks = detailsResponse.downloadLinks.result.links.driveLinks;
        const selectedDownload = pixelDrainLinks.find(link => link.quality === "SD 480p");
        
        if (!selectedDownload || !selectedDownload.link.startsWith('http')) {
            return await reply('❌ No valid 480p PixelDrain link available.');
        }

        // Convert to direct download link
        const fileId = selectedDownload.link.split('/').pop();
        const directDownloadLink = `https://pixeldrain.com/api/file/${fileId}?download`;
        
        // Construct caption with additional movie details
        const caption = `🎬 *${selectedMovie.title}*\n` +
                        `📅 Release Date: ${selectedMovie.releaseDate}\n` +
                        `⭐ Rating: ${selectedMovie.rating}\n` +
                        `🌍 Country: ${selectedMovie.country}\n` +
                        `⏱️ Duration: ${selectedMovie.duration}\n` +
                        `📌 Quality: 480p\n` +
                        `✅ *Ready to download!*\n` +
                        `> *SHIRO-MD*`;

        // Send movie details message first
        await reply({
            text: caption,
            preview: selectedMovie.thumbnail // Assuming thumbnail URL is provided in the API response
        });

        // Now download movie file
        const filePath = path.join(__dirname, `${selectedMovie.title}-480p.mp4`);
        const writer = fs.createWriteStream(filePath);
        
        const { data } = await axios({
            url: directDownloadLink,
            method: 'GET',
            responseType: 'stream'
        });

        data.pipe(writer);

        writer.on('finish', async () => {
            // Send the movie file with thumbnail
            await robin.sendMessage(from, {
                document: fs.readFileSync(filePath),
                mimetype: 'video/mp4',
                fileName: `${selectedMovie.title}-480p-SHIRO-MD.mp4`,
                caption: caption,
                thumbnail: selectedMovie.thumbnail, // Assuming thumbnail URL is provided in the API response
                quoted: mek 
            });
            fs.unlinkSync(filePath); // Clean up after sending
        });

        writer.on('error', async (err) => {
            console.error('Download Error:', err);
            await reply('❌ Failed to download movie. Please try again.');
        });
    } catch (error) {
        // Intentional error catch for debugging
        console.error('Error in movie command:', error);
        await reply('❌ Sorry, something went wrong. Please try again later.');
    }
}

// Attach the function to the command (using async for handler)
cmd.on('movie', async (q) => {
    await movieCommand(q); // Call the async movie command with the query
});
