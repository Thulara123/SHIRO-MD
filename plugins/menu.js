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

╭════════════⊷❍ 
┊ 2 || DOWNLOAD MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .song
┊ .video
┊ .fb
┊ .ig
┊ .tt

╭════════════⊷❍ 
┊ 3 || SEARCH MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .yts

╭════════════⊷❍ 
┊ 4 || GROUP MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .promote
┊ .demote
┊ .add
┊ .remove / .kick
┊ .setgoodbye
┊ .setwelcome
┊ .getpic


╭════════════⊷❍ 
┊ 5 || OWNER MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .srepo
┊ .restart
┊ .setpp
┊ .block
┊ .unblock
┊ .clearchats
┊ .shutdown
┊ .broadcast

╭════════════⊷❍ 
┊ 5 || OTHER MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .weather
┊ .trt
┊ .gpass

I AM SHIRO-MD V1 WHATSAPP USER BOT 🇦🇱


> POWERED BY SHIRO-MD DEVELOPED BY *{C0De_Zero};* 🚩`
await conn.sendMessage(from,{image:{url: `asset/SHIRO-MD.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
