const axios = require('axios');
const cheerio = require('cheerio');

class SnackVideo {
    async download(url) {
        try {
            let res = await axios.get(url);
            let $ = cheerio.load(res.data);
            let json = JSON.parse($("#VideoObject").text().trim());

            return json.contentUrl;
        } catch (error) {
            throw { msg: error.message };
        }
    }
}

const snackVideo = new SnackVideo();

let handler = async (m, { conn, args }) => {
    if (!args[0]) return m.reply("Mana link videonya?");

    try {
        let videoUrl = await snackVideo.download(args[0]);
        conn.sendMessage(m.chat, { 
            video: { url: videoUrl }
        });
    } catch (error) {
        m.reply(error.msg);
    }
};

handler.help = ["snack"];
handler.command = ["snack"];
handler.tags = ['downloader']

export default handler;
