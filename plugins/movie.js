const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')


cmd({
    pattern: "moviedownload",
    react: '🎬',
    category: "movies",
    desc: "Get movie download video file",
    use: '.moviedownload <movie_name>', // Command usage
    filename: __filename
},
async (conn, mek, m, { from, reply, q }) => {
    try {
        // පරිශීලකයා movie නම ලබාදේදැයි පරීක්ෂා කිරීම
        if (!q) {
            return reply("⛔ කරුණාකර මූව්වී එකේ නම ලබාදෙන්න. භාවිතය: .moviedownload <movie_name>");
        }

        // movie නම case-insensitive ලෙස සකසීම
        const movie = movieDownloads[q.toLowerCase()];
        
        // movie එක දත්ත ගබඩා තුළ තිබේදැයි පරීක්ෂා කිරීම
        if (!movie) {
            return reply(`⛔ මෙම මූව්වී එක හමු නොවීය. කරුණාකර වෙනත් නමක් උත්සාහ කරන්න.`);
        }

        // video file URL එක නිවැරදිදැයි පරීක්ෂා කිරීම
        if (!movie.videoUrl) {
            return reply(`⛔ මෙම මූව්වී එක සඳහා ඩවුන්ලෝඩ් සම්බන්ධීකරණයක් ලබා ගත නොහැක.`);
        }
        // movie video file එක WhatsApp මඟින් පරිශීලකයාට එවීම
        const videoFileName = `movie.title.mp4`;
        
        // නිවැරදිව url එක යොදීම
        conn.sendMessage(from, 
            video:  url: movie.videoUrl ,
            mimetype: 'video/mp4',
            caption: `🎬 *Movie Download:{movie.title}*`
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply("😓 මූව්වී වීඩියෝව ලබා ගැනීමේදී දෝෂයක් සිදු විය.");
    }
});
