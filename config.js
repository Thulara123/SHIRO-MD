const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "XFxi2ZID#Jqa6X4HhIJQkoEvh5-3PU9DJuePRiROORYBh7ABoIqU",
ALIVE_IMG : process.env.ALIVE_IMG || "asset/SHIRO-MD.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "Hello,I am SHIRO-MD. I am alive now !!!",
AUTO_READ_STATUS : process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
DATABASE_URL: process.env.DATABASE_URL === undefined ? 'postgres://movie_my_user:BDXztL7cmv1gV26b9eCsAseSMp7tqyvW@dpg-co1n7jvsc6pc73ctrku0-a.oregon-postgres.render.com/movie_my' : process.env.DATABASE_URL,
PREFIX: process.env.PREFIX || '.' ,
JID: process.env.JID || `94741688630@s.whatsapp.net` , 
FOOTER: process.env.FOOTER === undefined ? 'SHIRO-MD MOVIE DDOWMLOAD' : process.env.FOOTER
};
