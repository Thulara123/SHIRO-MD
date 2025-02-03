const { cmd, commands } = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    desc: "Download songs",
    category: "download",
    react: "🎵",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply("Please give me url");
        
        const search = await yts(q);
        const date = search.videos[0];  // Using date here, not data
        const url = date.url;  // Fixed: should be date.url, not data.url

        let desc = `
SHIRO-MD SONG DOWNLOADER

Title: date.title
Description:{date.description}
Time: date.ago
Views:{date.views}

> MADE BY {C0De_Zero};
        `
        await conn.sendMessage(from, { image: { url: date.thumbnail }, caption: desc }, { quoted: mek });

        // Download audio
        let down = await fg.yta(url);
        let downloadUrl = down.dl_url;

        // Send audio message
        await conn.sendMessage(from, { audio: { url: downloadUrl }, mimetype: "audio/mpeg" }, { quoted: mek });

        // Send video document message
        await conn.sendMessage(from, { document: { url: downloadUrl }, mimetype: "audio/mpeg", fileName: date.title + ".mp3", caption: "MADE BY SHIRO_MD" }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`{e}`);
    }
});

// Video

cmd({
    pattern: "video",
    desc: "Download videos",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply("Please give me url");
        
        const search = await yts(q);
        const date = search.videos[0];  // Using date here, not data
        const url = date.url;  // Fixed: should be date.url, not data.url

        let desc = `
SHIRO-MD VIDEO DOWNLOADER

Title:{date.title}
Description: date.description
Time:{date.ago}
Views: date.views

> MADE BY C0De_Zero;
        `
        await conn.sendMessage(from,  image:  url: date.thumbnail , caption: desc ,  quoted: mek );

        // Download video
        let down = await fg.ytv(url);
        let downloadUrl = down.dl_url;

        // Send video message
        await conn.sendMessage(from,  video:  url: downloadUrl , mimetype: "video/mp4" ,  quoted: mek );

        // Send video document message
        await conn.sendMessage(from,  document:  url: downloadUrl , mimetype: "video/mp4", fileName: date.title + ".mp4", caption: "MADE BY SHIRO_MD" ,  quoted: mek );

     catch (e) 
        console.log(e);
        reply(`{e}`);
    }
});
