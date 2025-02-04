const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

> *MY OWNER INFO 👨‍💻* 

*🔥 ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ᴀᴄᴅ-ᴍᴅ*
🔥 *ɴᴜᴍʙᴇʀ* -: 94768844616
🔥 *ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:* https://whatsapp.com/channel/0029VatUyIgJf05e75Nlnc3Y

*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴄᴅ-ᴍᴅ*
`
await conn.sendMessage(from,{image:{url: `https://i.im.ge/2024/11/28/z23eG8.IMG-20241128-WA0033.jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
