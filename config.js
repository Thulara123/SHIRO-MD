const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "yIwX2TID#SydRr7-8fGT3cKenNMpn4sOhxaSULQCf1D0ZGMUtRus",
ALIVE_IMG: process.env.ALIVE_IMG || "asset/SHIRO-MD.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello,I am Live now...!* 👋",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public"
};
