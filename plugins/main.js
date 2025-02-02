const config = require('../config')
const {
    cmd,
    commands
} = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')
const axios = require('axios')
const cheerio = require('cheerio')
const fg = require('api-dylux');
const si = require('systeminformation')
const os = require('os')
var { get_set , input_set } = require('../lib/set_db') 


                



cmd({
    pattern: "menu",
    react: "🗒️",
    desc: "SHIRO-MD Bot Script",
    category: "main",
    use: '.menu',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const ccp = await si.cpu()
const cinfo = await si.version()
let timee = await si.time()
const plat = os.hostname()	
let data = await fetchJson('https://gist.github.com/VajiraTech/c4f2ac834de5c45b3a8de8e2d165f973/raw')	
	
const maru =`┏━━❬🎬SHIRO-MD MOVIE DOWNLOAD MENU🎬❭━━┓
> ⿻ *Version* :: 1.0.0
> ⿻ *Runtime* :: ${runtime(process.uptime())}_
> ⿻ *Platform* :: ${plat}_
> ⿻ *CPU Manufacture* :: ${ccp.manufacturer}_
> ⿻ *CPU Brand* :: ${ccp.brand}_
> ⿻ *CPU Speed* :: ${ccp.speed}_
> ⿻ *Engine Version* :: ${cinfo}_
┗━━━━━━━━━━━━━━┉⦁⦁

*𝐇𝐄𝐋𝐋𝐎𝐖 ✨ ${pushname}*

┏━━━━❬ ᴍᴏᴠɪᴇ ᴅᴏᴡɴʟᴏᴀᴅ❭━━━━❯❯
┃◈ .ꜱɪɴʜᴀʟᴀꜱᴜʙ
┃◈ .ꜱɪɴʜᴀʟᴀᴛᴠꜱʜᴏᴡ
┃◈ .ᴘɪʀᴀᴛᴇ
┃◈ .ᴄɪɴᴇ
┗━━━━━━━━━━━━━━━┉⦁⦁
┏━━━━❬ ᴛᴏʀʀᴇɴᴛ ᴅᴏᴡɴʟᴏᴀᴅ❭━━━━❯❯
┃◈ .ʏᴛꜱᴍx
┗━━━━━━━━━━━━━━━┉⦁⦁
┏━━━━❬ ᴄᴀʀᴛᴏᴏɴ ᴅᴏᴡɴʟᴏᴀᴅ❭━━━━❯❯
┃◈ .ɢɪɴɪꜱɪꜱʟᴀ
┗━━━━━━━━━━━━━━━┉⦁⦁
┏━━━━❬ ꜱᴜʙᴛɪᴛʟᴇ ᴅᴏᴡɴʟᴏᴀᴅ❭━━━━❯❯
┃◈ .ᴢᴏᴏᴍ
┃◈ .ʙᴀɪꜱᴄᴏᴘᴇ
┗━━━━━━━━━━━━━━━┉`
//await conn.sendMessage(from , { text: maru  }, { quoted: mek } )
await conn.sendMessage(from, { image: { url:'LINK HERE JPG' } , caption: maru } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
		    console.log(e)
		    reply('➥' + e)

	    }
    })

cmd({
    pattern: "system",
    react: "🖥️",
    alias: ["s_info"],
    desc: "To Check bot\'s System information",
    category: "main",
    use: '.system',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const ccp = await si.cpu()
const cinfo = await si.version()
let timee = await si.time()
const plat = os.hostname()
let data = await fetchJson('https://gist.github.com/VajiraTech/c4f2ac834de5c45b3a8de8e2d165f973/raw')

const infomsg = `🖥️ *SHIRO-MD MOVIE DOWNLOAD SYSTEM INFO* 🖥️

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┣🔖  _Runtime -: ${runtime(process.uptime())}_
┣⏳  _Ram Usage -: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
┣🚀  _Bot Version -: ${data.version} Stable_
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌  *_Server System informations_*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┣⛊  _Platform : ${plat}_
┣⛊  _Running OS : ${os.platform()}_
┣⛊  _CPU Manufacture  -: ${ccp.manufacturer}_
┣⛊  _CPU Brand -: ${ccp.brand}_
┣⛊  _CPU Speed -: ${ccp.speed}_
┣⛊ _Engine Version -: ${cinfo}_
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`
 await conn.sendMessage(from , { text: infomsg  }, { quoted: mek } )

}catch (e) {
reply('*Error !!*')
l(e)
}
})



cmd({
    pattern: "ping",
    react: "📟",
    alias: ["speed","cyber_ping"],
    desc: "To Check bot's ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const nima = require("@whiskeysockets/baileys")
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '*_Pinging to MovieDL Module..._* ❗'  } )
var final = new Date().getTime();
await conn.sendMessage(from, { text : '《 █▒▒▒▒▒▒▒▒▒▒▒》10%' , edit : ping.key })
await conn.sendMessage(from, { text : '《 ████▒▒▒▒▒▒▒▒》30%' , edit : ping.key })
await conn.sendMessage(from, { text : '《 ███████▒▒▒▒▒》50%' , edit : ping.key })
await conn.sendMessage(from, { text : '《 ██████████▒▒》80%' , edit : ping.key })
await conn.sendMessage(from, { text : '《 ████████████》100%' , edit : ping.key })

/*var moviedl = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await conn.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < moviedl.length; i++) {
await conn.sendMessage(from, {text: moviedl[i], edit: key })
}  */

	
return await conn.sendMessage(from, { text : '📍️ *Pong ' + (final - inital) + ' Ms* ' , edit : ping.key })
} catch (e) {
reply('*Error !!*')
l(e)
}
})




cmd({
    pattern: "test",	
    react: '🔎',
    category: "search",
    desc: "cinesubz moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, q, isDev, l, reply }) => {
try{
      //  if(!q) return await reply('*please give me text !..*')
if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')	

const fg = require('api-dylux');

function drivelink(link) { 
    const id = link.match(/id=([^&]+)/)[1]; 
    const driveLink = `https://drive.google.com/file/d/${id}/view?usp=sharing`;
    
    return driveLink;
}
 
const link = `${q}`;
const driveLink = drivelink(link);
 
let res = await fg.GDriveDl(driveLink)
reply(JSON.stringify(res,null,2))

const msg = `📃 SHIRO-MD 𝗠𝗢𝗜𝗩𝗘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥`
        
      let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Watch on Pirate',
                        url: q,
                        merchant_url: q
                    }),
                },
                     {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: `480P`,
                        id: ".fetch " + q
                    }),
                }
                ]
                let message = {
                    image: '',
                    header: '',
                    footer: 'MOVIE DOWNLOADER BY SHIRO-MD',
                    body: msg

                }
                return conn.sendButtonMessage(from, buttons, m, message)

	    } catch (e) {
		    console.log(e)
		    reply('➥' + e)

	    }
    })





cmd({
    pattern: "setprefix",
    react: "🗣️",
    desc: "To change bot prefix",
    category: "main",
    use: '.setprefix .',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, isDev, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')
if ( config.PREFIX == q) return reply("*මෙම සැකසුම දැනටමත් යාවත්කාලීන කර ඇත !*")
await input_set("PREFIX", q)
await reply("*prefix updated: " + q + "*")
} catch (e) {
reply('*Error !!*')
l(e)
}
})


cmd({
    pattern: "activate",
    react: "🗣️",
    desc: "To change bot prefix",
    category: "main",
    use: '.setprefix .',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, isDev, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')
if ( config.JID == q) return reply("*මෙම සැකසුම දැනටමත් යාවත්කාලීන කර ඇත !*")
await input_set("JID", q)
await reply(`*╭══════════════*\n*┃「 ᴍᴏᴠɪᴇ ᴄᴏɴᴛʀᴏʟᴇʀ*\n*╰══════════════*\n\n*╭───────────┈◦•◦❥•*\n*╎© 🚀Running Jid: ${config.JID}*\n\n*╎✅Succesfully Activate For This Jid: ${q}*\n\n*╚──────────────┈┈*`)
} catch (e) {
reply('*Error !!*')
l(e)
}
})



cmd({
    pattern: "default",
    react: "🗣️",
    desc: "To change bot prefix",
    category: "main",
    use: '.setprefix .',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, isDev, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')
if ( config.DJID == from) return reply("*මෙම සැකසුම දැනටමත් යාවත්කාලීන කර ඇත !*")
await input_set("JID", from)
await reply(`✅*Succesfully Activate For Default*`)
} catch (e) {
reply('*Error !!*')
l(e)
}
})



