const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "📜",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dec = `👋 HEY ${pushname} THIS IS MY MENU 📍

*© OWNER*  : ꜱʜɪʀᴏ-ᴍᴅ
                      
*© SUPPORTER* :ꜱʜɪʀᴏ-ᴍᴅ

*© NUMBERS* : +94741688630
                        
*© SUPPORTER NUMBER* : +94741688630

╭──────────●●►
│📌 LIST MENU
╰──────────●●►

╭════════════⊷❍ 
┊ 1 || MAIN  MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .alive
┊ .menu
┊ .ping
┊ .system
┊ .about
┊ .restart

╭════════════⊷❍ 
┊ 2 || DOWNLOAD MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .song <url>
┊ .video <url>
┊ .fb <url>

╭════════════⊷❍ 
┊ 3 || OWNER MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .promote <tag number>
┊ .demote <tag number>
┊ .add <Enter number with country code>
┊ .remove / .kick <tag number>
┊ .mute
┊ .unmute
┊ .block <tag number>
┊ .unblock <tag number>

I AM SHIRO-MD V1 WHATSAPP USER BOT 🧑‍💻


> POWERED BY SHIRO-MD DEVELOPED BY *{C0De_Zero};* 🚩`
await conn.sendMessage(from,{image:{url: `asset/SHIRO-MD.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
