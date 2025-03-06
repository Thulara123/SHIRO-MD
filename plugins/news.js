const axios = require('axios');
const { cmd } = require('./command');  

cmd({
    pattern: 'itnnews',
    desc: 'Get the latest ITN news.',
    category: 'News',
    use: '.news',
    react: '📰',
    filename: __filename
}, async (conn, mek, m, { reply }) => {
    try {
        // Fetch latest news from the provided API
        const res = await axios.get('https://suhas-bro-api.vercel.app/news/itn');
        const newsData = res.data;

        if (!newsData || newsData.length === 0) {
            return reply("❌ No news available at the moment.");
        }

        
        const article = newsData[0];

        let newsReply = `📰 Latest ITN News:\n\n`;
        newsReply += `📅 Date: article.date`;
        newsReply += `📝 Title:{article.title}\n`;
        newsReply += `📝 Summary: ${article.summary}\n`;
newsReply += `🔗 Link:{article.link}\n`;

        
        reply(newsReply);

    } catch (error) {
        console.error("Error fetching news:", error.message);
        reply("❌ An error occurred while fetching the latest news.");
    }
    });
