const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs-extra')
const pk = "`("
const pk2 = ")`"
const oce = "`"
var uploader = "🎬 TC TEAM MOVIE-DL 🎬 "

cmd({
    pattern: "ytsmxs",	
    react: '🔎',
    category: "search",
    desc: "sinhalasub moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, q, isDev, reply }) => {
try{

 if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')
        if(!q) return await reply('*please give me text !..*')
	const url = `https://yts.mx/browse-movies/${q}/all/all/0/latest/0/all`
const response = await axios.get(url);	
const $ = cheerio.load(response.data);

let result = [];
    $("section > div.row > div").each((c, d) => {
        result.push({
             title: $(d).find("div.browse-movie-bottom > a").text(),
             year: $(d).find("div.browse-movie-bottom > div").text(),
             link: $(d).find("a").attr("href"),
             image: $(d).find("a > figure > img").attr("src"),
             rating: $(d).find("a > figure > figcaption > h4.rating").text(),
             danne: $(d).find("a > figure > figcaption > h4").eq(1).text(),
             danne1: $(d).find("a > figure > figcaption > h4").eq(2).text(),
           

        })
    })
        if (result.length < 1) return await conn.sendMessage(from, { text: 'erro !' }, { quoted: mek } )
      let textw = `🔎 SHIRO-MD 𝗠𝗢𝗜𝗩𝗘 𝗦𝗘𝗔𝗥𝗖𝗛 \n\n`;	
for (var i = 0; i < result.length; i++) {
  textw +=`*📃 Title:* ${result[i].title}\n`	
  textw +=`*⛓️ No:* ${result[i].danne1}\n`	
  textw +=`*📚 CatName:* ${result[i].danne}\n`
  textw +=`*💫 Rating:* ${result[i].rating}\n`
  textw +=`*📅 Date:* ${result[i].year}\n`
  textw +=`*📎 Link:* ${result[i].link}\n\n--------------------------------------------\n\n
`
} 
        
return await conn.sendMessage(config.JID, { image: { url:result[0].image } , caption: textw } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})       

cmd({              
    pattern: "ytsmx",	
    react: '📑',
    category: "search",
    desc: "yts.x moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, q, isDev, reply }) => {
try{
	if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')
        if(!q) return await reply('*please give me text !..*')
const url = `https://yts.mx/browse-movies/${q}/all/all/0/latest/0/all`
const response = await axios.get(url);	
const $ = cheerio.load(response.data);

let result = [];
    $("section > div.row > div").each((c, d) => {
        result.push({
             title: $(d).find("div.browse-movie-bottom > a").text(),
             year: $(d).find("div.browse-movie-bottom > div").text(),
             link: $(d).find("a").attr("href"),
             image: $(d).find("a > figure > img").attr("src"),
             rating: $(d).find("a > figure > figcaption > h4.rating").text(),
             danne: $(d).find("a > figure > figcaption > h4").eq(1).text(),
             danne1: $(d).find("a > figure > figcaption > h4").eq(2).text(),
           

        })
    })
        if (result.length < 1) return await conn.sendMessage(from, { text: 'erro !' }, { quoted: mek } )
      	var rows = [];  
for (var i = 0; i < result.length; i++) {
	rows.push({
    
              header: '',
              title: result[i].title,
              description: result[i].year,
              id: `.ytmx ${result[i].link}`
            
          });
        }
          
        let buttons = [{
          name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'Download Subs 📥',
                        sections: [{
                            title: 'Search By Yts.mx',
                            highlight_label: 'HSHIRO-MD SUB-DOWNLOADER',
                            rows: rows
                    }]
               }),
          }
      ]
        const info = `⏳ Search A Movie Name: ${q}
📲 Search top 10 Movie\n`
        let opts = {
                image: result[0].image,
                header: '_*SHIRO-MD YTS.MX DOWNLOADER*_',
                footer: 'MOVIE DOWNLOADER BY SHIRO-MD',
                body: info 

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
            }
    })


cmd({
    pattern: "ytmx",	
    react: '📑',
    category: "search",
    desc: "sinhalasub moive downloader",
    filename: __filename
},
    async (conn, m, mek, { from, q, reply, isDev, prefix }) => {
try{
	if(!q) return await reply('*please give me text !..*')
	if (!isDev) return await reply('*this command only use premium members* 👨‍💻')
               
const response = await axios.get(q);	
const $ = cheerio.load(response.data);

	const title = $("#mobile-movie-info > h1").text();
        const year = $("#mobile-movie-info > h2:nth-child(2)").eq(0).text();
        const language = $("#mobile-movie-info > h2 > span").text();
        const image = $("#movie-poster > img").attr("src");
        const enter = $("#mobile-movie-info > h2").eq(1).text();
        let download_links = [];
      $("div.modal.modal-download.hidden-xs.hidden-sm > div > div > div").each((c, d) => {
          download_links.push({ 
               quality: $(d).find("div > span").text(),
               type: $(d).find("p.quality-size").eq(0).text(),
               size: $(d).find("p.quality-size").eq(1).text(),
               torrent_file: $(d).find("a").attr("href"),
               magnet: $(d).find("a.magnet-download.download-torrent.magnet").attr("href"),
          })
      })
	
	   if (download_links.length < 1) return await conn.sendMessage(from, { text: `🚫 Download Link Not Found: *${q}*` }, { quoted: mek } )
var rows = [];  
for (var i = 0; i < download_links.length; i++) {
rows.push({
	
              header: download_links[i].type,   
              title: `${download_links[i].quality}`,
              description: download_links[i].size,
              id: `${prefix}ytmxdl ${download_links[i].magnet}`
            
          });
        }
      
                      const msg = `📃 SHIRO-MD 𝗧𝗘𝗔𝗠 𝗬𝗧𝗦𝗠𝗫 𝗠𝗗𝗟 🎬\n\n
📑 *Title:* ${title}\n
🧬 *Year:* ${year}\n
🫧 *Language:* ${language}`

                let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐓𝐎𝐑𝐑𝐄𝐍𝐓 📂",
                        url: download_links[0].torrent_file,
                        merchant_url: download_links[0].torrent_file
                    }),
                },
                {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'DOWNLOAD YTSMX 📥',
                        sections: [{
                            title: 'YTS.MX MDL',
                            highlight_label: 'SHIRO-MD',
                            rows: rows
                    }]
               }),
          }
                ]
                let message = {
                    image: image,
                    header: '',
                    footer: config.FOOTER,
                    body: msg

                }
                return conn.sendButtonMessage(from, buttons, m, message)

	    } catch (e) {
		    console.log(e)
		    reply('➥' + e)

	    }
    })
	




cmd({
    pattern: "ytmxdl",
    react: '⬆',    
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isDev, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	

							 
  if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')  

var Seedr = require("seedr");
var seedr = new Seedr();
await seedr.login("vajirarathnayaka891@gmail.com","vajirarathnayaka891@");

const ad_mg = await conn.sendMessage(from, { text : 'ᴜᴘʟᴏᴀᴅɪɴɢ magnet file...📥' }, {quoted: mek} )
const magnet = await seedr.addMagnet(q);

	var SHIROlod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴜᴘʟᴏᴀᴅᴇᴅ ᴍᴀɢɴᴇᴛ ꜰɪʟᴇ ✅..."
]
let { key } = await conn.sendMessage(from, {text: 'ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴜᴘʟᴏᴀᴅᴇᴅ ᴍᴀɢɴᴇᴛ ꜰɪʟᴇ ✅...' , edit : ad_mg.key }, {quoted: mek})

for (let i = 0; i < SHIROlod.length; i++) {
await conn.sendMessage(from, {text: SHIROlod[i], edit: key })
}


    if (magnet.code === 400 || magnet.result !== true) {
        console.log("Error adding magnet " + JSON.stringify(magnet, null, 2))
        return null;
    }
    var contents = []
	do {
		contents = await seedr.getVideos();
	} while (contents.length === 0);


		var file = await seedr.getFile(contents[0][0].id);
		var folder_id=  contents[0][0].fid 

	const link = file.url
await conn.sendMessage(config.JID,{document:await getBuffer(link),mimetype:"video/mp4",fileName:`${uploader}.mp4`,caption:`> ${file.name}`}
)
	await seedr.deleteFolder(folder_id)
await conn.sendMessage(from, { text : 'Movie send Successfull ✔' }, {quoted: mek} )
	
} catch (e) {
await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
console.log(e)
reply(`❌ *Error Accurated !!*\n\n${e}`)
}
})

/*		    
async function addmagnet(magnetlink){
const magnet = await seedr.addMagnet(magnetlink);
	if (magnet.code === 400 || magnet.result !== true) {
		magnet.code = 400
		if (!magnet.error && magnet.result) {
			if (magnet.result === 'not_enough_space_added_to_wishlist') {
				const torrenystream = await extractTorrentToMp4(magnetlink)
				magnet.error = 'File size exceeds 2 GB or another torrent is being downloaded. Please use this link: \n\n' + torrenystream
			} else {
				magnet.error = magnet.result
			}
		}
		return magnet
	}
}
const mag = await addmagnet(magnetlink)
if(mag.error) return reply(mag.error)
var contents = []
	do {
		contents = await seedr.getVideos();
	} while (contents.length === 0);


		var file = await seedr.getFile(contents[0][0].id);
		var folder_id=  contents[0][0].fid 

const link = file.url
	title =file.name
	caption =  config.FOOTERNAME
	await sendfilebyurl(chats, from, link, caption, title, reply, mek, conn)
	await seedr.deleteFolder(folder_id)*/
