case 'listheroml': {
    try {
        let response = await fetch('https://api.vreden.my.id/api/search/listhero');
        let data = await response.json();

        if (data.status !== 200) {
            throw new Error('Gagal mengambil data hero');
        }

        let heroes = data.result;
        let heroDetails = heroes.map(hero => {
            return `**Hero Name:** ${hero.name}\n**Role:** ${hero.role}\n**Specialty:** ${hero.specialty}\n`;
        }).join('\n\n');

        let imageUrl = 'https://static.wikia.nocookie.net/mobile-legends/images/1/11/Hero351-icon.png/revision/latest/scale-to-width-down/100?cb=20241021145405';
        let caption = `\`I N F O R M A T I O N\`\n\nPilih hero untuk melihat detailnya!\n\n${heroDetails}`;

        let buffer = await getBuffer(imageUrl);
        await pulsar.sendMessage(m.chat, { text: caption }, { quoted: m });
        await sock.sendImage(m.chat, buffer, 'Daftar Hero Mobile Legends', { quoted: m });
    } catch (error) {
        console.error('Error dalam listheroml:', error);
        await sock.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat mengambil data hero.' }, { quoted: m });
    }
    break;
}
