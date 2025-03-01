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

let dec = `*🧚‍♂️ SHIRO-MD Whatsapp Bot*

*| ᴏᴡɴᴇʀ ɴᴀᴍᴇ*: {ᴄᴏᴅᴇ_ᴢᴇʀᴏ};
*| ɴᴜᴍʙᴇʀ*: 94741688630
*| ʏᴏᴜᴛᴜʙᴇ*:https://youtube.com/@djthularajay?si=F7FKZw7LYieGHTqK 

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱʜɪʀᴏ-ᴍᴅ
`
await conn.sendMessage(from,{image:{url: `asset/SHIRO-MD.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
