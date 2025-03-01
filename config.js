const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "XUAE3LxI#qVDAWRREvr7W8XXmr4DY-J2imACaFewsoW0N_LU4UbE",
ALIVE_IMG: process.env.ALIVE_IMG || "asset/SHIRO-MD.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello,I am Live now...!* 👋",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MOVIE_API_KEY: process.env.MOVIE_API_KEY || "sky|75d014b745c09a7b745fdeb070bbbd203a822e9b",
MODE: process.env.MODE || "public"
};
