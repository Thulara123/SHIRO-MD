const axios = require('axios');
const mime = require('mime-types');  // Make sure to install mime-types package
const cheerio = require('cheerio');
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const config = require('../config')
const {
  cmd,
  commands
} = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')

cmd({
    pattern: "mdl",    
    react: '📑',
    category: "search",
    desc: "pirate movie downloader",
    filename: __filename
}, async (conn, m, mek, { from, q, isDev, reply }) => {
    try {
        if (!isDev) return reply('⚠️ ⚠️ *Contact owner to activate your number to Premium user*');
        if (!q) return await reply('*Please provide a search query! (e.g., movies or tv)*');

        let url;
        if (q.toLowerCase() === "movies") {
            url = 'https://www.1337xx.to/popular-movies';
        } else if (q.toLowerCase() === "tv") {
            url = 'https://www.1337xx.to/popular-tv';
        } else {
            return await reply('*Invalid query! Use "movies" or "tv" to search popular content.*');
        }
const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        let download_links = [];
	    
            const download = $("body > main > div > div > div > div.l01666766a6e72ac1e0b35a029d916ebeb4c2ea24.no-top-radius > div.l30719a994ed675b3e5543484a83d6141b0edb709.clearfix > ul.l9007bbd0b313f4aa20553ab76822d4971c77b323.ldcb0d226eccf9ef57b49d77ef2a5c194f84fb666 > li:nth-child(1) > a").attr("href")
      
      const title = $("body > main > div > div > div > div.box-info-heading.clearfix > h1").text();
      const category = $("body > main > div > div > div > div.l01666766a6e72ac1e0b35a029d916ebeb4c2ea24.no-top-radius > div.l30719a994ed675b3e5543484a83d6141b0edb709.clearfix > ul:nth-child(2) > li:nth-child(1) > span").text();
      const type = $("body > main > div > div > div > div.l01666766a6e72ac1e0b35a029d916ebeb4c2ea24.no-top-radius > div.l30719a994ed675b3e5543484a83d6141b0edb709.clearfix > ul:nth-child(2) > li:nth-child(2) > span").text();
      const language = $("body > main > div > div > div > div.l01666766a6e72ac1e0b35a029d916ebeb4c2ea24.no-top-radius > div.l30719a994ed675b3e5543484a83d6141b0edb709.clearfix > ul:nth-child(2) > li:nth-child(3) > span").text();
      const size = $("body > main > div > div > div > div.l01666766a6e72ac1e0b35a029d916ebeb4c2ea24.no-top-radius > div.l30719a994ed675b3e5543484a83d6141b0edb709.clearfix > ul:nth-child(2) > li:nth-child(4) > span").text();
      const date = $("body > main > div > div > div > div.l01666766a6e72ac1e0b35a029d916ebeb4c2ea24.no-top-radius > div.l30719a994ed675b3e5543484a83d6141b0edb709.clearfix > ul:nth-child(3) > li:nth-child(3) > span").text();

      const genimg = $("body > main > div > div > div > div.l01666766a6e72ac1e0b35a029d916ebeb4c2ea24.no-top-radius > div.torrent-detail.clearfix > div.torrent-image-wrap > div > img").attr("src");
      const image = 'https://www.1337xx.to' + genimg
      const desc = $("#mCSB_1_container > p").text();

           

        
                movies.push({
                    title,
                    category,
                    type,
                    language,
                    size,
		    date,
                    image,
                    desc
                });
        


       
        if (download_links.length < 1) {
            return await conn.sendMessage(from, { text: 'Error: No content found!' }, { quoted: mek });
        }

        let rows = [];
        for (let i = 0; i < download_links.length; i++) {
            rows.push({
                header: '',
                title: download_links[i].title,
                description: download_links[i].size,
                id: `.mxxdl ${download_links[i].download}`
            });
        }

        let buttons = [{
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: `Download ${q.charAt(0).toUpperCase() + q.slice(1)} 📥`,
                sections: [{
                    title: `Search by 1337xx (${q.charAt(0).toUpperCase() + q.slice(1)})`,
                    highlight_label: 'SHIRO-MD MOVIE-DOWNLOADER',
                    rows: rows
                }]
            })
        }];

        const info = `⏳ Popular ${q.charAt(0).toUpperCase() + q.slice(1)}: 
📲 Showing top 10 results from 1337xx`;
        
        let opts = {
            image: 'https://i.imghippo.com/files/eHnNz1727502797.jpg',
            header: `_*SHIRO-MD 1337xx DOWNLOADER*_`,
            footer: 'MOVIE DOWNLOADER BY SHIRO-MD',
            body: info
        };

        return await conn.sendButtonMessage(from, buttons, m, opts);

    } catch (e) {
        reply('*Error occurred!*');
        console.log(e);
    }
});



cmd({
    pattern: "mxx",    
    react: '📑',
    category: "search",
    desc: "pirate movie downloader",
    filename: __filename
},
async (conn, m, mek, { from, q, isDev, reply }) => {
    try {
        if (!isDev) return reply('⚠️ ⚠️ *Contact owner to activate your number to Premium user*');
        if (!q) return await reply('*Please provide a search query! (e.g., movies or tv)*');

        let url;
        if (q.toLowerCase() === "movies") {
            url = `https://www.1337xx.to/popular-movies/?s=${q}`;
        } else if (q.toLowerCase() === "tv") {
            url = `https://www.1337xx.to/popular-tv/?s=${q}`;
        } else {
            return await reply('*Invalid query! Use "movies" or "tv" to search popular content.*');
        }

        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
     
        let download_links = [];


        $("div.table-list-wrap > table > tbody tr").each((index, element) => {
            const title = $(element).find("td.coll-1.name > a:nth-child(2)").text().trim();
            const size = $(element).find("td.coll-4.size.mob-uploader").text().trim();
            const link = $(element).find("td.coll-1.name > a:nth-child(2)").attr("href");

            if (link) {
                download_links.push({
                    title,
                    size,
                    link: `https://www.1337xx.to${link}` // Full link to the movie or TV show
                });
            }
        });

        if (download_links.length < 1) {
            return await conn.sendMessage(from, { text: 'Error: No content found!' }, { quoted: mek });
        }

        let rows = [];
        for (let i = 0; i < download_links.length; i++) {
            rows.push({
                header: '',
                title: download_links[i].title,
                description: download_links[i].size,
                id: `.mxxdl ${download_links[i].link}`
            });
        }

        let buttons = [{
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: `Download ${q.charAt(0).toUpperCase() + q.slice(1)} 📥`,
                sections: [{
                    title: `Search by 1337xx (${q.charAt(0).toUpperCase() + q.slice(1)})`,
                    highlight_label: 'SHIRO-MD MOVIE-DOWNLOADER',
                    rows: rows
                }]
            })
        }];

        const info = `⏳ Popular ${q.charAt(0).toUpperCase() + q.slice(1)}: 
📲 Showing top 10 results from 1337xx`;
        
        let opts = {
            image: 'https://i.imghippo.com/files/eHnNz1727502797.jpg',
            header: `_*SHIRO-MD 1337xx DOWNLOADER*_`,
            footer: 'MOVIE DOWNLOADER BY SHIRO-MD',
            body: info
        };

        return await conn.sendButtonMessage(from, buttons, m, opts);

    } catch (e) {
        reply('*Error occurred!*');
        console.log(e);
    }
});



		    



cmd({
    pattern: "mxxdl",	
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
      const download = $("body > main > div > div > div > div.l01666766a6e72ac1e0b35a029d916ebeb4c2ea24.no-top-radius > div.l30719a994ed675b3e5543484a83d6141b0edb709.clearfix > ul.l9007bbd0b313f4aa20553ab76822d4971c77b323.ldcb0d226eccf9ef57b49d77ef2a5c194f84fb666 > li:nth-child(1) > a").attr("href")
	
	   
      
                      const msg = `📃 SHIRO-MD 1337𝗫𝗫 MOVIE DOWNLOADER 🎬\n\n
📑 *Title:* ${q}\n`

                      let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: 'Watch on 1337xx',
                        url: q,
                        merchant_url: q
                    }),
                },
                     {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: `1337xx`,
                        id: `.ytmxdl ${download}`
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
	
   
