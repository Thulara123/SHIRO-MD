const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PdogVA7S#x4Q4i8zQQFafApTxoA4FcvdPBWbLwEHxUM31sDcPHYg",
MONGODB: process.env.MONGODB || "",
};
