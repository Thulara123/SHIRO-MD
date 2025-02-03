const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    desc: "Download songs",
    category: "download",
    react: "🔄",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if(!q) return reply("Please give me url")
const search = await yts(q)
const date = search.videos[0];
const url = data.url

let desc = `
*SHIRO-MD SONG DOWNLOADER*

*Title:* $(data.title)
*Description:* $(data.description)
Time:* $(data.ago)
*Views:* $(data.views)

> MADE BY {C0De_Zero};
`
await conn.sendMessage(from,{image:{url: data.thumnail},caption:desc},{quoted:mek})

//download audio

let down = await fg.yta(url);
let downloadUrl = down.dl_url

//send audio massage

await  conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})

//send video decument massage

await  conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"MADE BY SHIRO_MD"},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//video


cmd({
    pattern: "video",
    desc: "Download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if(!q) return reply("Please give me url")
const search = await yts(q)
const date = search.videos[0];
const url = data.url

let desc = `
*SHIRO-MD VIDEO DOWNLOADER*

*Title:* $(data.title)
*Description:* $(data.description)
Time:* $(data.ago)
*Views:* $(data.views)

> MADE BY {C0De_Zero};
`
await conn.sendMessage(from,{image:{url: data.thumnail},caption:desc},{quoted:mek})

//download video

let down = await fg.ytv{url}
let downloadUrl = down.dl_url

//send video massage

await  conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})

//send video decument massage

await  conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"MADE BY SHIRO_MD"},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
