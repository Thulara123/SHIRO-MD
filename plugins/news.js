const axios = require('axios');
const { cmd } = require('../command'); // Adjust this based on your bot's command handler

// SUHAS-MD News Plugin Command
cmd({
    pattern: 'itnnews',
    desc: 'Get the latest ITN news.',
    category: 'News',
    use: '.itnnews',
    react: '📰',
    filename: __filename
}, async (conn, mek, m, { reply }) => {
    try {
        // Fetch latest news from the provided API
        const res = await axios.get('https://suhas-bro-api.vercel.app/news/itn');
        const newsData = res.data;

        // Check if the API returned valid data
        if (!newsData || newsData.length === 0) {
            return reply("❌ No news available at the moment.");
        }

        // Get the first news article
        const article = newsData[0];

        // Create a formatted response with the latest news
        let newsReply = `📰 *Latest ITN News*:\n\n`;
        newsReply += `📅 *Date*: ${article.date}\n`;
        newsReply += `📝 *Title*: ${article.title}\n`;
        newsReply += `📝 *Summary*: ${article.summary}\n`;
        newsReply += `🔗 *Link*: ${article.link}\n`;

        // Send the formatted news response to the user
        reply(newsReply);

    } catch (error) {
        console.error("Error fetching news:", error);
        reply("❌ An error occurred while fetching the latest news.");
    }
});
