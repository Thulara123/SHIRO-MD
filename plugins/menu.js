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

*© OWNERS*  : ᴏʟᴅ ᴋɪɴɢ ᴀꜱʜ
                      ᴏʟᴅ ᴋɪɴɢ ᴄʀᴀᴢʏ ᴄʜᴜᴛᴛᴀ
                      ᴏʟᴅ ᴋɪɴɢ ᴄʀᴀᴢʏ ᴅɪɴᴀ
                      
*© SUPPORTER* : ᴅʀᴋ ᴋɪɴɢ ᴠᴀʟᴀ

*© NUMBERS* : +94726645160
                        +94701219309
                        +94768844616
                        
*© SUPPORTER NUMBER* : +94767737862

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

╭════════════⊷❍ 
┊ 2 || DOWNLOAD MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .song
┊ .video
┊ .fb
┊ .mediafire

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
┊ .shutdown
┊ .setpp
┊ .block
┊ .unblock
┊ .clearchats
┊ .restart
┊ .broadcast

╭════════════⊷❍ 
┊ 5 || OTHER MENU
┊＿＿＿＿＿＿＿＿＿＿＿
┊ .ai
┊ .news

I AM ACD - MD V1 WHATSAPP USER BOT 🇦🇱


> POWERED BY THE MAIN CYBER TEAM AND DRAK ARROW 🚩`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/Qp22bZ1/IMG-20241129-WA0428.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
