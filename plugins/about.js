const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "about",
    desc: "To get the bot informations.",
    react: "ℹ️",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let about = ` HELLOW THEIR ${senderNumber} I AM SHIRO-MD WHATSAPP BOT 
              👋 HEY ${pushname} THIS IS MY MENU 📍
              CREATED BY *{C0De_Zero};*
              
              > *© SHIRO Whatsapp Bot*
              > *ɢɪᴛʜᴜʙ :* github.com/Thulara123/SHIRO-MD
              
              THANKS FOR USING SHIRO-MD`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:about},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
