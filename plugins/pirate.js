const fg = require('api-dylux');
const axios = require('axios');
const mime = require('mime-types');  // Make sure to install mime-types package
const cheerio = require('cheerio');
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { File } = require('megajs');
const fs = require('fs-extra');
const config = require('../config')
const { sinhalaSub } = require("mrnima-moviedl")
const {
  cmd,
  commands
} = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, fetchApi} = require('../lib/functions')




cmd({
    pattern: "pirates",	
    react: '🔎',
    category: "search",
    desc: "cinesubz moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, q, isDev, l, reply }) => {
try{
	if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')
        if(!q) return await reply('*please give me text !..*')
	const url = `https://pirate.lk/?s=${q}`
const response = await axios.get(url);
          const $ = cheerio.load(response.data);

    const data = $(".search-page .result-item article")
      .map((index, element) => ({
        No: index + 1,
        img: $(element).find("div.image > div a").attr("src"),
        link: $(element).find('.details .title a').attr("href"),
        rating: $(element).find('.details .meta .rating').text().trim(),
        title: $(element).find('.details .title a').text().trim(),
        year: $(element).find(".details .meta .year").text().trim(),
        desc: $(element).find('.details .contenido p').text().trim(),
        type: $(element).find('div.image > div span').text().trim(),
		  }))
    
        if (data.length < 1) return await conn.sendMessage(from, { text: 'erro !' }, { quoted: mek } )
      let textw = `🔎 SHIRO-MD 𝗣𝗜𝗥𝗔𝗧𝗘 𝗠𝗢𝗩𝗜𝗘 𝗦𝗘𝗔𝗥𝗖𝗛 \n\n`;	
for (var i = 0; i < data.length; i++) {
  textw +=`*📌 Title:* ${data[i].No}\n`		
  textw +=`*📌 Title:* ${data[i].title}\n`	
  textw +=`*📚 CatName:* ${data[i].rating}\n`	
  textw +=`*📚 CatName:* ${data[i].type}\n`
  textw +=`*📅 Date:* ${data[i].year}\n`
  textw +=`*📎 Link:* ${data[i].link}\n`
  textw +=`*📃 Rating:* ${data[i].desc}\n\n--------------------------------------------\n\n
`
} 
        
return await conn.sendMessage(from, { image: { url:data[0].img } , caption: textw } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})      


              
                    
cmd({
    pattern: "pirate",	
    react: '📑',
    category: "search",
    desc: "pirate moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, q, isDev, reply }) => {
try{
	if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')
        if(!q) return await reply('*please give me text !..*')
const url = `https://pirate.lk/?s=${q}`
const response = await axios.get(url);
          const $ = cheerio.load(response.data);

    const data = $(".search-page .result-item article")
      .map((index, element) => ({
        No: index + 1,
        img: $(element).find("div.image > div a").attr("src"),
        link: $(element).find('.details .title a').attr("href"),
        rating: $(element).find('.details .meta .rating').text().trim(),
        title: $(element).find('.details .title a').text().trim(),
        year: $(element).find(".details .meta .year").text().trim(),
        desc: $(element).find('.details .contenido p').text().trim(),
        type: $(element).find('div.image > div span').text().trim(),
		  }))
      


        if (data.length < 1) return await conn.sendMessage(from, { text: 'erro !' }, { quoted: mek } )
      	var rows = [];  
for (var i = 0; i < data.length; i++) {
	rows.push({
    
              header: data[i].year,
              title: data[i].title,
              description: data[i].desc,
              id: `.pdlq ${data[i].link}`
            
          });
        }
          
        let buttons = [{
          name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'Download Moive 📥',
                        sections: [{
                            title: 'Search By Pirate',
                            highlight_label: 'SHIRO-MD MOVIE DOWNLOADER',
                            rows: rows
                    }]
               }),
          }
      ]
        const info = `⏳ Search A Movie Name: ${q}
📲 Search top 10 Moive\n
Pirate`
        let opts = {
                image: data[0].img,
                header: '_*SHIRO-MD PIRATE DOWNLOADER*_',
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
    pattern: "pdlq",	
    react: '📑',
    category: "search",
    desc: "sinhalasub moive downloader",
    filename: __filename
},
    async ( conn, mek, m, { reply, q, isDev, l, from }) => {
	    if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')
	    try {

/*const url = `https://pirate.lk/?s=${q}`
const response = await fetch(url);
   
    if (response.status === 200) {
     const $k = cheerio.load(await response.text());

*/
const response = await axios.get(q);
		    const $k = cheerio.load(response.data);
		    
      const links = $k('#link-5626 > td:nth-child(1) > a').attr('href');
      const res = await fetch(links);
      const $ = cheerio.load(await res.text());
      const link = $('#link').attr('href');

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
                        id: ".pdl " + link
                    }),
                }
                ]
                let message = {
                    image: '',
                    header: '',
                    footer: 'MOVIE DOWNLOADER BY SJIRO-MD',
                    body: msg

                }
                return conn.sendButtonMessage(from, buttons, m, message)

	    } catch (e) {
		    console.log(e)
		    reply('➥' + e)

	    }
    })
	
   

cmd({
    pattern: "pdl",
    react: "🍟",
    desc: "urlneed",
    category: "download",
    use: '.mega < mega.nz url >',
    filename: __filename
}, 
    async (conn, mek, m, { from, q, isDev, reply }) => {
	  if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')  
        const msr = (await fetchJson('https://raw.githubusercontent.com/DarkYasiyaofc/FROZEN-HARD/main/MESSAGES/mreply.json')).replyMsg
    if (!q) return await reply(msr.url)
        if(!q.includes('mega.nz')) { return await reply(msr.valid_url)} 
    try {
        const file = File.fromURL(q)
        await file.loadAttributes()
     //   if (file.size >= config.MAX_SIZE * 1024 * 1024) return reply(`File size exeeded...\nMaximum Upload Size Is ${config.MAX_SIZ} MB`)
        const data = await file.downloadBuffer();

        if (/mp4/.test(file.name)) {
            await conn.sendMessage(from, { document: data, mimetype: "video/mp4", fileName: `${file.name}`, caption: `${file.name}\n\n${config.FOOTER}` }, { quoted: mek });
        } else if (/pdf/.test(file.name)) {
            await conn.sendMessage(from, { document: data, mimetype: "application/pdf", fileName: `${file.name}` , caption: `${file.name}\n\n${config.FOOTER}` }, { quoted: mek });
        } else if (/zip/.test(file.name)) {
            await conn.sendMessage(from, { document: data, mimetype: "application/zip", fileName: `${file.name}` , caption: `${file.name}\n\n${config.FOOTER}` }, { quoted: mek });
        } else if (/rar/.test(file.name)) {
            await conn.sendMessage(from, { document: data, mimetype: "application/x-rar-compressed", fileName: `${file.name}` , caption: `${file.name}\n\n${config.FOOTER}` }, { quoted: mek });
        } else if (/7z/.test(file.name)) {
            await conn.sendMessage(from, { document: data, mimetype: "application/x-7z-compressed", fileName: `${file.name}` , caption: `${file.name}\n\n${config.FOOTER}` }, { quoted: mek });
        } else if (/jpg|jpeg/.test(file.name)) {
            await conn.sendMessage(from, { document: data, mimetype: "image/jpeg", fileName: `${file.name}` , caption: `${file.name}\n\n${config.FOOTER}` }, { quoted: mek });
        } else if (/png/.test(file.name)) {
            await conn.sendMessage(from, { document: data, mimetype: "image/png", fileName: `${file.name}` , caption: `${file.name}\n\n${config.FOOTER}` }, { quoted: mek });
        } else {
            await conn.sendMessage(from, { document: data, mimetype: "application/octet-stream", fileName: `${file.name}` , caption: `${file.name}\n\n${config.FOOTER}` }, { quoted: mek })
        }

        await conn.sendMessage(from, { react: { text: '✔', key: mek.key } })
    } catch (e) {
const msr = (await fetchJson('https://raw.githubusercontent.com/DarkYasiyaofc/FROZEN-HARD/main/MESSAGES/mreply.json'))
await conn.sendMessage(from, { react: { text: `❌`, key: mek.key } })
console.log(e)
reply(e)
}
})



