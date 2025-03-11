const { Sticker, StickerTypes } = require('wa-sticker-formatter'); // StickerTypes import කිරීම
const { cmd } = require('../command'); // cmd function එක import කිරීම

const botConfig = {
  pattern: "save",
  category: "download",
  react: '🎧',
  use: ".save",
  filename: __filename
};

cmd(botConfig, async (bot, msg, metadata, { from, q, reply }) => {
  try {
    let remoteJid = metadata.key.remoteJid;
    const isGroupChat = remoteJid.endsWith("@g.us");
    let participant = isGroupChat ? metadata.key.participant || metadata.participant : remoteJid;
    let quotedMessage = metadata.message.extendedTextMessage?.contextInfo?.quotedMessage;

    if (quotedMessage) {
      let mediaData;

      if (quotedMessage.imageMessage) {
        let mediaFile = await bot.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        mediaData = { image: { url: mediaFile }, caption: quotedMessage.imageMessage.caption };
      } else if (quotedMessage.videoMessage) {
        let mediaFile = await bot.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        mediaData = { video: { url: mediaFile }, caption: quotedMessage.videoMessage.caption };
      } else if (quotedMessage.audioMessage) {
        let mediaFile = await bot.downloadAndSaveMediaMessage(quotedMessage.audioMessage);
        mediaData = { audio: { url: mediaFile }, mimetype: "audio/mp4" };
      } else if (quotedMessage.stickerMessage) {
        let mediaFile = await bot.downloadAndSaveMediaMessage(quotedMessage.stickerMessage);
        const stickerOptions = {
          pack: "VAJIRA-MD",
          type: StickerTypes.CROPPED,
          categories: ['🤩', '🎉'],
          id: "12345",
          quality: 70,
          background: "transparent"
        };
        let sticker = new Sticker(mediaFile, stickerOptions);
        const stickerBuffer = await sticker.toBuffer();
        mediaData = { sticker: stickerBuffer };
      } else {
        mediaData = { q: quotedMessage.conversation };
      }

      bot.sendMessage(participant, mediaData);
    } else {
      reply("Please mention the message you want to save.");
    }
  } catch (error) {
    console.error(error);
    reply("Error occurred while processing the request.");
  }
});
