const axios = require('axios');
const mime = require('mime-types');  // Make sure to install mime-types package
const cheerio = require('cheerio');
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { File } = require('megajs');
const config = require('../config')
const { sinhalaSub } = require("mrnima-moviedl")
const {
  cmd,
  commands
} = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')


                    
cmd({
    pattern: "zoom",	
    react: '📑',
    category: "search",
    desc: "pirate moive downloader",
    filename: __filename
},
async (conn, m, mek, { from, q, isDev, reply }) => {
try{
	if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')
        if(!q) return await reply('*please give me text !..*')
const url = `https://zoom.lk/?s=${q}`;
const response = await axios.get(url);	
const $ = cheerio.load(response.data);

let result = [];
    $("div.td-pb-span8.td-main-content > div > div.td_module_16.td_module_wrap.td-animation-stack").each((c, d) => {
        result.push({
             time: $(d).find("div.item-details > div > span > time").text(),
             title: $(d).find("div.item-details > h3 > a").text(),
             author: $(d).find("div.item-details > div > span > a").text(),
             desc: $(d).find("div.item-details > div.td-excerpt").text(),
             comments: $(d).find("div.item-details > div > span.td-module-comments a").text(),
             image: $(d).find("div.td-module-thumb > img").attr("src"),
	     link: $(d).find("div.item-details > h3 > a").attr("href"),	
           /*const link = d.find("div.cm-entry-summary > a").attr("href");
           const lin2 = d.find("div.cm-entry-summary > div:nth-child(35) > a").attr("href");
           const dllinks = lin2 ? lin2 : link*/

        })
    })
        if (result.length < 1) return await conn.sendMessage(from, { text: 'erro !' }, { quoted: mek } )
      	var rows = [];  
for (var i = 0; i < result.length; i++) {
	rows.push({
    
              header: '',
              title: result[i].title,
              description: result[i].time,
              id: `.zoomdl ${result[i].link}`
            
          });
        }
          
        let buttons = [{
          name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: 'Download Subs 📥',
                        sections: [{
                            title: 'Search By Zoom',
                            highlight_label: 'SHIRO-MD SUB-DOWNLOADER',
                            rows: rows
                    }]
               }),
          }
      ]
        const info = `⏳ Search A Movie Name: ${q}
📲 Search top 10 Movie Subtitles\n
baiscope`
        let opts = {
                image: ``,
                header: '_*SHIRO-MD ZOOM DOWNLOADER*_',
                footer: 'SUBS DOWNLOADER BY SHIRO-MD',
                body: info 

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
            }
    })


cmd({
    pattern: "zoomdl",	
    react: '📑',
    category: "search",
    desc: "sinhalasub moive downloader",
    filename: __filename
},
    async ( conn, mek, m, { reply, q, isDev, l, from }) => {
	 if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')   
	    try {
		    if (!q) return await reply("please give me text !..")
               
const response = await axios.get(q);	
const $ = cheerio.load(response.data);
      const title = $("#tdi_56 > div > div.vc_column.tdi_59.wpb_column.vc_column_container.tdc-column.td-pb-span8 > div > div.td_block_wrap.tdb_title.tdi_60.tdb-single-title.td-pb-border-top.td_block_template_17 > div > h1").text();
      const author = $("#tdi_56 > div > div.vc_column.tdi_59.wpb_column.vc_column_container.tdc-column.td-pb-span8 > div > div.vc_row_inner.tdi_62.vc_row.vc_inner.wpb_row.td-pb-row > div.vc_column_inner.tdi_64.wpb_column.vc_column_container.tdc-inner-column.td-pb-span4 > div > div > div > div > ul > li > a").text();
      const view = $("#tdi_56 > div > div.vc_column.tdi_59.wpb_column.vc_column_container.tdc-column.td-pb-span8 > div > div.vc_row_inner.tdi_62.vc_row.vc_inner.wpb_row.td-pb-row > div.vc_column_inner.tdi_67.wpb_column.vc_column_container.tdc-inner-column.td-pb-span4 > div > div > div > div > span").text();
      const date = $("#tdi_56 > div > div.vc_column.tdi_59.wpb_column.vc_column_container.tdc-column.td-pb-span8 > div > div.vc_row_inner.tdi_62.vc_row.vc_inner.wpb_row.td-pb-row > div.vc_column_inner.tdi_70.wpb_column.vc_column_container.tdc-inner-column.td-pb-span4 > div > div > div > div > time").text();
      const size = $("#tdi_81 > div > div.vc_column.tdi_84.wpb_column.vc_column_container.tdc-column.td-pb-span8 > div > div.td_block_wrap.tdb_single_content.tdi_86.td-pb-border-top.td_block_template_17.td-post-content.tagdiv-type > div > p > a > small").text();
      const dllink = $("div.tdb-block-inner.td-fix-index > p > a").attr("href");
		    
                      const msg = `📃 SHIRO-MD 𝗦𝗨𝗕𝗦 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥\n\n
📃 *Title:* ${title}\n
🔗 *Link:* ${dllink}\n
📅 *Year:* ${date}\n
💫 *Size:* ${size}\n
⏳ *Views:* ${view}\n`

                let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Watch on ZOOM',
                        url: q,
                        merchant_url: q
                    }),
                },
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: `CLICK TO DOWN SUB`,
                        id: `.fetchrar1 ${dllink}`
                    }),
                }
                ]
                let message = {
                    image: '',
                    header: '🎬━_*SHIRO-MD ZOOM DOWNLOADER*_━🎬',
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
    pattern: "fetchrar1",
    react: "📥",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, isDev, reply }) => {
	if ( !isDev ) return reply('⚠️ ⚠️ *Contact owner to Active your number To Premium user*')
    if (!q) {
        return await reply('*Please provide a direct URL!*');
    }

    try {

	    
        const mediaUrl = q.trim();

        const response = await axios.get(mediaUrl, { responseType: 'arraybuffer' });
        const mediaBuffer = Buffer.from(response.data, 'binary');

var SHIROlod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙸𝙽𝙸𝚃𝙸𝙰𝙻𝙸𝚉𝙴𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await conn.sendMessage(from, {text: 'ᴜᴘʟᴏᴀᴅɪɴɢ ᴍᴏᴠɪᴇ...'})

for (let i = 0; i < SHIROlod.length; i++) {
await conn.sendMessage(from, {text: SHIROlod[i], edit: key })
}


        const message = {
            document: mediaBuffer,
	    caption: "*🎬 SHIRO-MD MOVIE DOWNLOADER 🎬*",
            mimetype: "application/rar",
            fileName: `SUBDL.rar`,
        };
        await conn.sendMessage(config.JID, message, { quoted: mek });

        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
    } catch (error) {
        console.error('Error fetching or sending', error);
        await conn.sendMessage(from, '*Error fetching or sending *', { quoted: mek });
    }
});




