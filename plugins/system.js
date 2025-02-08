const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "To Check uptime , ram and more.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let status = `
🏷️ SYSTEM STATUS

🔄 UPTIME: ${runtime(process.uptime())}
🔋 RAM USAGE: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
💻 HOST NAME: ${os.hostname()}
👑 BOT OWNER: *{C0De_Zero};*

> *SHIRO-MD*
`
await conn.sendMessage(from,{image:{url: `asset/SHIRO-MD.jpg`},caption:status},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)

}
})


cmd({
    pattern: "runtime",
    alias: ["uptime"],
    desc: "To Check uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let status = `😇𝚁𝚄𝙽𝚃𝙸𝙼𝙴😇:  ${runtime(process.uptime())}`


return reply(`${status}`)
}catch(e){
console.log(e)
reply(`${e}`)

}
})
