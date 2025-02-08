const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "ytdl",
    desc: "Download a specific song using the David Cyril Tech API",
    category: "download",
    use: ".song <YouTube URL>",
    react: "✅",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply(`Please provide a YouTube URL.`);

        const apiUrl = `https://api.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(q)}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (!data.success) return reply("❌ Failed to fetch song details!");

        const songDetails = data.result;
        const songMsg = `*SHIRO-MD YT DOWNLOADER*
┏━━━━━━━━━━━━━━━━━━━━━━━━━━┓        
*📜 TITLE*: ➥ ${songDetails.title}\n
*📷 THUMBNAIL*: ➥ ${songDetails.thumbnail}\n
*🔊 QUALITY*: ➥ ${songDetails.quality}
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
*SENDING AUDIO & VIDEO FILES...*`;

        await conn.sendMessage(from, {
                               
            image: { url: songDetails.thumbnail },
            caption: songMsg, },{quoted: mek });

        // Send the auduo file directly
        await conn.sendMessage(from, {
            audio: { url: songDetails.download_url },
            mimetype: "audio/mpeg",
            fileName: songDetails.title + ".mp3",
            caption: "SHIRO-MD",
        }, { quoted: mek });

        //send the audio document file directly 
        await conn.sendMessage(from, {
            document: { url: songDetails.download_url },
            mimetype: "audio/mpeg",
            fileName: songDetails.title + ".mp3",
            caption: "*SHIRO-MD*",
        }, { quoted: mek });

       //send rhe video file directly
        await conn.sendMessage(from, {
            video: { url: songDetails.download_url },
            mimetype: "video/mp4",
            fileName: songDetails.title + ".mp4",
            caption: "*SHIRO-MD*",
        }, { quoted: mek });

        //send the video document file directly 
        await conn.sendMessage(from, {
            document: { url: songDetails.download_url },
            mimetype: "video/mp4",
            fileName: songDetails.title + ".mp4",
            caption: "*SHIRO-MD*",
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        reply(`${e}`);
    }
});
