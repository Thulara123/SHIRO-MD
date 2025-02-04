cmd({
    pattern: "song",
    desc: "Download songs",
    category: "download",
    react: "🎵",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {
        if (!q) return reply("Please give me a valid URL or search query.");
        
        // Ensure the search term is valid
        const search = await yts(q);
        if (!search || !search.videos || !search.videos[0]) {
            return reply("No videos found for the provided search query.");
        }

        const date = search.videos[0];
        const url = date.url; // This must be a string
        
        // Validate URL
        if (!url) {
            return reply("The video URL is not available.");
        }

        // Prepare the description
        let desc = `
            SHIRO-MD SONG DOWNLOADER

            Title: date.title
            Description:{date.description}
            Time: date.ago
            Views:{date.views}

            > MADE BY {C0De_Zero};
        `;
        
        // Send video thumbnail and description
await conn.sendMessage(from, {
            image: { url: date.thumbnail }, 
            caption: desc, 
            quoted: mek 
        });

        // Download audio
        let down = await fg.yta(url);
        let downloadUrl = down.dl_url;

        // Send audio message
        await conn.sendMessage(from, {
            audio: { url: downloadUrl },
            mimetype: "audio/mpeg"
        }, { quoted: mek });

        // Send video document message
        await conn.sendMessage(from, {
            document: { url: downloadUrl },
            mimetype: "audio/mpeg",
            fileName: date.title.mp3,
            caption: "MADE BY SHIRO_MD"
        ,  quoted: mek );

     catch (e) 
        console.log(e);
        reply(An error occurred:{e.message});
    }
});
