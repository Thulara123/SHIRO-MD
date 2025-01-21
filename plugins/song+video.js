const { cmd, commands } = require('../command');
const fg = require('api-dylux');
const yts = require('yt-search');

cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
[21/01, 12:10] ChatGPT: if (!q) return reply("Please provide a URL or title.");
        
        const search = await yts(q);
        const data = search.video[0];
        const url = data.url;

        let desc = `
*SHIRO-MD SONG DOWNLOADER*
  
Title: data.title
Description:{data.description}
Time: data.timestamp
Ago:{data.ago}
Views: data.views
  
MADE BY SHIRO-MD
`;

        // Send video thumbnail and details
        await conn.sendMessage(from,  image:  url: data.thumbnail , caption: desc ,  quoted: mek );

        // Download the song
        let down = await fg.yta(url);
        if (!down || !down.dl_url) 
            return reply("Sorry, I couldn't download the song.");
        
        let downloadUrl = down.dl_url;

        // Send audio message
        await conn.sendMessage(from,  audio:  url: downloadUrl , mimetype: "audio/mpeg" ,  quoted: mek );

        // Send document (MP3)
        await conn.sendMessage(from,  document:  url: downloadUrl , mimetype: "audio/mpeg", fileName: `{data.title}.mp3`, caption: "SHIRO-MD" }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message || e}`);
    }
});

//***** video-dl ****

cmd({
    pattern: "video",
    desc: "download video",
    category: "download",
    filename: __filename
[21/01, 12:10] ChatGPT: , async (conn, mek, m,  from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply ) => 
    try 
        if (!q) return reply("Please provide a URL or title.");
        
        const search = await yts(q);
        const data = search.video[0];
        const url = data.url;

        let desc = `
*SHIRO-MD VIDEO DOWNLOADER*
  
Title:{data.title}
Description: data.description
Time:{data.timestamp}
Ago: data.ago
Views:{data.views}
  
MADE BY SHIRO-MD
`;

        // Send video thumbnail and details
        await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        // Download the video
        let down = await fg.ytv(url);
        if (!down || !down.dl_url) {
            return reply("Sorry, I couldn't download the video.");
        }
        let downloadUrl = down.dl_url;

        // Send video message
        await conn.sendMessage(from, { video: { url: downloadUrl }, mimetype: "video/mp4" }, { quoted: mek });

        // Send document (MP4)
[21/01, 12:10] ChatGPT: await conn.sendMessage(from, { document: { url: downloadUrl }, mimetype: "video/mp4", fileName: `data.title.mp4`, caption: "SHIRO-MD" ,  quoted: mek );

     catch (e) 
        console.log(e);
        reply(`Error:{e.message || e}`);
    }
});
