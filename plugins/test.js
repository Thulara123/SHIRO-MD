const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fg = require('api-dylux');
const yts = require('yt-search');

// WhatsApp client එක සකස් කිරීම
const client = new Client();

// QR code එක generate කිරීම (WhatsApp Web වල login වීමට)
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
console.log('Scan this QR code to login into WhatsApp!');
});

// Client එක සාර්ථකව සම්බන්ධ වීම
client.on('ready', () => {
    console.log('WhatsApp Bot is ready!');
});

// Song download සඳහා command
client.on('message', async (message) => {
    const { body } = message;

    if (body.startsWith('!song')) {  // Song download command
        const query = body.slice(6).trim();  // Extract song name or URL
        if (!query) {
            message.reply('Please provide a song name or YouTube URL.');
            return;
        }

        try {
            // YouTube හෝ song search කිරීම
            const search = await yts(query);
            const video = search.videos[0];
            const url = video.url;
            const desc = `
            *Song Download*

            *Title:* video.title
            *Description:*{video.description}
            *Views:* ${video.views}
            `;

            // Song thumbnail සහ description එවීම
            await message.reply({ image: { url: video.thumbnail }, caption: desc });

            // Song download URL ලබා ගැනීම
            const downloadData = await fg.yta(url);
            const downloadUrl = downloadData.dl_url;

            // Audio file එක WhatsApp එකට යැවීම
        await message.reply({ audio: { url: downloadUrl }, mimetype: 'audio/mpeg' });
        } catch (error) {
            console.error(error);
            message.reply('Something went wrong. Please try again.');
        }
    }
});
