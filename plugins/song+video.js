const cmd = require('../command');
const fg = require('api-dylux');
const yts = require('yt-search');

cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m, {from, quoted, body, isCmd, command, args, q}) => {
    try {
        if (!q) return reply("Please give me a url or title");

        const search = await yts(q);
        if (!search.video || search.video.length === 0) {
            return reply("No results found. Please try a different query.");
        }
        
        const data = search.video[0];
        const url = data.url;

        let desc= `
        *SHIRO-MD SONG DOWNLOADER*
          
        title: ${data.title}
        description: ${data.description}
        time: ${data.timestamp}
        ago: ${data.ago}
        views: ${data.views}
          
        MADE BY SHIRO-MD
        `;

        await conn.sendMessage(from, {image: {url: data.thumbnail}, caption: desc}, {quoted: mek});

        // Download audio
        let down = await fg.yta(url);
        let downloadUrl = down.dl_url;

        // Send audio message
        await conn.sendMessage(from, {audio: {url: downloadUrl}, mimetype: "audio/mpeg"}, {quoted: mek});
        await conn.sendMessage(from, {document: {url: downloadUrl}, mimetype: "audio/mpeg", fileName: data.title + ".mp3", caption: "SHIRO-MD"}, {quoted: mek});
        
    } catch (e) {
        console.log(e);
        reply(`An error occurred: ${e.message}`);
    }
});

//*********video-dl********

cmd({
    pattern: "video",
    desc: "download video",
    category: "download",
    filename: __filename
},
async(conn, mek, m, {from, quoted, body, isCmd, command, args, q}) => {
    try {
        if (!q) return reply("Please give me a url or title");

        const search = await yts(q);
        if (!search.video || search.video.length === 0) {
            return reply("No results found. Please try a different query.");
        }
        
        const data = search.video[0];
        const url = data.url;

        let desc= `
        *SHIRO-MD VIDEO DOWNLOADER*
          
        title: ${data.title}
        description: ${data.description}
        time: ${data.timestamp}
        ago: ${data.ago}
        views: ${data.views}
          
        MADE BY SHIRO-MD
        `;

        await conn.sendMessage(from, {image: {url: data.thumbnail}, caption: desc}, {quoted: mek});

        // Download video
        let down = await fg.ytv(url);
        let downloadUrl = down.dl_url;

        // Send video message
        await conn.sendMessage(from, {video: {url: downloadUrl}, mimetype: "video/mp4"}, {quoted: mek});
        await conn.sendMessage(from, {document: {url: downloadUrl}, mimetype: "video/mp4", fileName: data.title + ".mp4", caption: "SHIRO-MD"}, {quoted: mek});
        
    } catch (e) {
        console.log(e);
        reply(`An error occurred: ${e.message}`);
    }
});
