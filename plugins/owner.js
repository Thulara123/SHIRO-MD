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

🔥 *ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: {C0De_Zero};*
🔥 *ɴᴜᴍʙᴇʀ* -: 94741688630
🔥 *ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ-:* https://youtube.com/@djthularajay?si=F7FKZw7LYieGHTqK

*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱʜɪʀᴏ-ᴍᴅ*
`
await conn.sendMessage(from,{image:{url: `https://i.im.ge/2024/11/28/z23eG8.IMG-20241128-WA0033.jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
