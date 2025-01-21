const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menu = {
main: '',
download: '',
group: '',
owner: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu =`*Hello ${pushname}*
> *DOWNLOAD COMMANDS*

${menu.download}

> *MAIN COMMAND*

${menu.main}

> *OWNER COMMANDS*

${menu.owner}

> *CONVERT COMMAND*

${menu.convert}

> *SEARCH COMMANDS*

${menu.search}

SHIRO-MD`

await conn.sendMessage(from,{text:madeMenu},{quoted:mek})
  
}catch(e){
console.log(e);
reply(`${e}`)
})
