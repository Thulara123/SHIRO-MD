const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "KMAjyCiZ#L9WW3Uwu6iHaFg2DQTIqB7DNGSuA4C4E_3dVgY7TCb8",
ALIVE_IMG : process.env.ALIVE_IMG || "asset/SHIRO-MD.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "Hello,I am SHIRO-MD. I am alive now !!!",
AUTO_READ_STATUS : process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
};
