const {cmd , commands} = require('../command');
const axios = require('axios');

cmd({
    pattern: "ipinfo",
    desc: "Get information about an IP address",
    use: ".ipinfo <IP_address>",
    category: "search",
    filename: __filename
}, async (conn, mek, m, { from, reply, q }) => {
    try {
        if (!q) return reply("⛔ Please provide an IP address!");

        const apiUrl = `https://BJ-Devs.serv00.net/Ip-Info.php?ip=${q}`;

        const response = await axios.get(apiUrl);
        const data = response.data;

        // Format the response message
        let resultMessage = `🔍 *IP Information:*\n\n`;
        resultMessage += `🌐 IP: ${data.ip}\n`;
        resultMessage += `🌍 Continent: ${data.continent_name} (${data.continent_code})\n`;
        resultMessage += `🇨🇳 Country: ${data.country_name} (${data.country_code2})\n`;
        resultMessage += `🏙️ City: ${data.city}\n`;
        resultMessage += `📍 State/Province: ${data.state_prov}\n`;
        resultMessage += `📮 Zip Code: ${data.zipcode}\n`;
        resultMessage += `📏 Latitude: ${data.latitude}\n`;
        resultMessage += `📏 Longitude: ${data.longitude}\n`;
        resultMessage += `📞 Calling Code: ${data.calling_code}\n`;
        resultMessage += `🕒 Time Zone: ${data.time_zone}\n`;
        resultMessage += `💻 ISP: ${data.isp}\n`;
        resultMessage += `🏳️ Country Flag: ${data.country_flag}\n`;

        // Send the response back
        reply(resultMessage);
    } catch (error) {
        console.error(error);
        if (error.response && error.response.data) {
            reply(`Error: ${error.response.data.message}`);
        } else {
            reply('An error occurred while fetching IP information. Please try again later.');
        }
    }
});
