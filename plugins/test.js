case 'apk': {
    if (!text) return reply(`*Example:* ${prefix + command} WhatsApp`);

    try {
        await reply('🔍 *Searching for APK...*');

        
        const apiUrl = `https://api.davidcyriltech.my.id/download/apk?text=${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);

        if (!response.data.success) {
            return reply('❌ *Failed to fetch APK. Try again later.*');
        }


        const { apk_name, thumbnail, download_link } = response.data;

        
        await David.sendMessage(m.chat, { 
            image: { url: thumbnail },
            caption: `📥 *APK Downloader* 📥\n\n` +
                     `📌 *Name:* ${apk_name}\n\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅ ᴄʏʀɪʟ ᴛᴇᴄʜ` +
                     `🔗 *Downloading APK...*`
        }, { quoted: m });

        
        await David.sendMessage(m.chat, { 
            document: { url: download_link }, 
            mimetype: 'application/vnd.android.package-archive',
            fileName: `${apk_name}.apk`
        }, { quoted: m });

    } catch (error) {
        console.error('Error in APK Downloader:', error);
        reply('❌ *Failed to fetch APK. Try again later.*');
    }
    break;
}
