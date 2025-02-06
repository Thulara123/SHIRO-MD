const { cmd } = require('../command');

cmd({
    pattern: "block",
    react: "⚠️",
    alias: ["ban"],
    desc: "Block a user instantly.",
    category: "main",
    filename: __filename
},
async (robin, mek, m, { quoted, reply, isOwner }) => {
    try {
        // Check if the user is the bot owner
        if (!isOwner) return reply("⚠️ Only the owner can use this command!");

        // Check if the command is used on a quoted message
        if (!quoted) return reply("⚠️ Please reply to the user's message to block them!");

        // Extract the target user from the quoted message
        const target = quoted.sender;

        // Block the target user
        await robin.updateBlockStatus(target, "block");

        // Confirm success
        return reply(`✅ Successfully blocked: @${target.split('@')[0]}`);
    } catch (e) {
        console.error("Block Error:", e);
        return reply(`❌ Failed to block the user. Error: ${e.message}`);
    }
});


cmd({
    pattern: "kick",
    alias: ["remove", "ban"],
    react: "⚠️",
    desc: "Remove a mentioned user from the group.",
    category: "main",
    filename: __filename
},
async (robin, mek, m, { from, isGroup, isAdmins, isBotAdmins, reply, quoted }) => {
    try {
        // Check if the command is used in a group
        if (!isGroup) return reply("⚠️ This command can only be used in a group!");

        // Check if the user issuing the command is an admin
        if (!isAdmins) return reply("⚠️ Only group admins can use this command!");

        // Check if the bot is an admin
        if (!isBotAdmins) return reply("⚠️ I need to be an admin to execute this command!");

        // Ensure a user is mentioned
        if (!quoted) return reply("⚠️ Please reply to the user's message you want to kick!");

        // Get the target user to remove
        const target = quoted.sender;

        // Ensure the target is not another admin
        const groupMetadata = await robin.groupMetadata(from);
        const groupAdmins = groupMetadata.participants.filter(participant => participant.admin).map(admin => admin.id);

        if (groupAdmins.includes(target)) {
            return reply("⚠️ I cannot remove another admin from the group!");
        }

        // Kick the target user
        await robin.groupParticipantsUpdate(from, [target], "remove");

        // Confirm the action
        return reply(`✅ Successfully removed: @${target.split('@')[0]}`);
    } catch (e) {
        console.error("Kick Error:", e);
        reply(`❌ Failed to remove the user. Error: ${e.message}`);
    }
});


cmd({
    pattern: "left",
    alias: ["leave", "exit"],
    react: "⚠️",
    desc: "Leave the current group.",
    category: "main",
    filename: __filename
},
async (robin, mek, m, { from, isGroup, isOwner, reply }) => {
    try {
        // Check if the command is used in a group
        if (!isGroup) return reply("⚠️ This command can only be used in a group!");

        // Check if the user is the bot owner
        if (!isOwner) return reply("⚠️ Only the owner can use this command!");

        // Leave the group
        await robin.groupLeave(from);

        // Confirm leaving
        console.log(`✅ Successfully left the group: ${from}`);
    } catch (e) {
        console.error("Leave Error:", e);
        reply(`❌ Failed to leave the group. Error: ${e.message}`);
    }
});



cmd({
    pattern: "mute",
    alias: ["silence", "lock"],
    react: "⚠️",
    desc: "Set group chat to admin-only messages.",
    category: "main",
    filename: __filename
},
async (robin, mek, m, { from, isGroup, isAdmins, isBotAdmins, reply }) => {
    try {
        // Check if the command is used in a group
        if (!isGroup) return reply("⚠️ This command can only be used in a group!");

        // Check if the user is an admin
        if (!isAdmins) return reply("⚠️ This command is only for group admins!");

        // Check if the bot is an admin
        if (!isBotAdmins) return reply("⚠️ I need to be an admin to execute this command!");

        // Set the group to admin-only
        await robin.groupSettingUpdate(from, "announcement");

        // Confirm the action
        return reply("✅ Group has been muted. Only admins can send messages now!");
    } catch (e) {
        console.error("Mute Error:", e);
        reply(`❌ Failed to mute the group. Error: ${e.message}`);
    }
});

cmd({
    pattern: "unmute",
    alias: ["unlock"],
    react: "⚠️",
    desc: "Allow everyone to send messages in the group.",
    category: "main",
    filename: __filename
},
async (robin, mek, m, { from, isGroup, isAdmins, isBotAdmins, reply }) => {
    try {
        // Check if the command is used in a group
        if (!isGroup) return reply("⚠️ This command can only be used in a group!");

        // Check if the user is an admin
        if (!isAdmins) return reply("⚠️ This command is only for group admins!");

        // Check if the bot is an admin
        if (!isBotAdmins) return reply("⚠️ I need to be an admin to execute this command!");

        // Set the group to everyone can message
        await robin.groupSettingUpdate(from, "not_announcement");

        // Confirm the action
        return reply("✅ Group has been unmuted. Everyone can send messages now!");
    } catch (e) {
        console.error("Unmute Error:", e);
        reply(`❌ Failed to unmute the group. Error: ${e.message}`);
    }
});


cmd({
    pattern: "add",
    alias: ["invite"],
    react: "➕",
    desc: "Add a user to the group.",
    category: "main",
    filename: __filename
},
async (robin, mek, m, { from, isGroup, isAdmins, isBotAdmins, reply, args }) => {
    try {
        // Check if the command is used in a group
        if (!isGroup) return reply("⚠️ This command can only be used in a group!");

        // Check if the user issuing the command is an admin
        if (!isAdmins) return reply("⚠️ Only group admins can use this command!");

        // Check if the bot is an admin
        if (!isBotAdmins) return reply("⚠️ I need to be an admin to execute this command!");

        // Ensure a phone number or user ID is provided
        if (!args[0]) return reply("⚠️ Please provide the phone number of the user to add!");

        // Parse the phone number and ensure it's in the correct format
        const target = args[0].includes("@") ? args[0] : `${args[0]}@s.whatsapp.net`;

        // Add the user to the group
        await robin.groupParticipantsUpdate(from, [target], "add");

        // Confirm success
        return reply(`✅ Successfully added: @${target.split('@')[0]}`);
    } catch (e) {
        console.error("Add Error:", e);
        reply(`❌ Failed to add the user. Error: ${e.message}`);
    }
});


cmd({
    pattern: "demote",
    alias: ["member"],
    react: "⚠️",
    desc: "Remove admin privileges from a mentioned user.",
    category: "main",
    filename: __filename
},
async (robin, mek, m, { from, isGroup, isAdmins, isBotAdmins, reply, quoted }) => {
    try {
        // Check if the command is used in a group
        if (!isGroup) return reply("⚠️ This command can only be used in a group!");

        // Check if the user issuing the command is an admin
        if (!isAdmins) return reply("⚠️ Only group admins can use this command!");

        // Check if the bot is an admin
        if (!isBotAdmins) return reply("⚠️ I need to be an admin to execute this command!");

        // Ensure a user is mentioned
        if (!quoted) return reply("⚠️ Please reply to the user's message you want to remove admin privileges from!");

        // Get the target user to demote
        const target = quoted.sender;

        // Ensure the target is not the user who issued the command
        if (target === from) return reply("⚠️ You cannot remove your own admin privileges!");

        // Ensure the target is an admin
        const groupMetadata = await robin.groupMetadata(from);
        const groupAdmins = groupMetadata.participants.filter(participant => participant.admin).map(admin => admin.id);

        if (!groupAdmins.includes(target)) {
            return reply("⚠️ The mentioned user is not an admin!");
        }

        // Demote the target user
        await robin.groupParticipantsUpdate(from, [target], "demote");

        // Confirm the action
        return reply(`✅ Successfully removed admin privileges from: @${target.split('@')[0]}`);
    } catch (e) {
        console.error("Dismiss Admin Error:", e);
        reply(`❌ Failed to remove admin privileges. Error: ${e.message}`);
    }
});


cmd({
    pattern: "promote",
    alias: ["admin", "makeadmin"],
    react: "⚡",
    desc: "Grant admin privileges to a mentioned user.",
    category: "main",
    filename: __filename
},
async (robin, mek, m, { from, isGroup, isAdmins, isBotAdmins, reply, quoted }) => {
    try {
        // Check if the command is used in a group
        if (!isGroup) return reply("⚠️ This command can only be used in a group!");

        // Check if the user issuing the command is an admin
        if (!isAdmins) return reply("⚠️ Only group admins can use this command!");

        // Check if the bot is an admin
        if (!isBotAdmins) return reply("⚠️ I need to be an admin to execute this command!");

        // Ensure a user is mentioned
        if (!quoted) return reply("⚠️ Please reply to the user's message you want to promote to admin!");

        // Get the target user to promote
        const target = quoted.sender;

        // Ensure the target is not already an admin
        const groupMetadata = await robin.groupMetadata(from);
        const groupAdmins = groupMetadata.participants.filter(participant => participant.admin).map(admin => admin.id);

        if (groupAdmins.includes(target)) {
            return reply("⚠️ The mentioned user is already an admin!");
        }

        // Promote the target user to admin
        await robin.groupParticipantsUpdate(from, [target], "promote");

        // Confirm the action
        return reply(`✅ Successfully promoted @${target.split('@')[0]} to admin!`);
    } catch (e) {
        console.error("Promote Admin Error:", e);
        reply(`❌ Failed to promote the user. Error: ${e.message}`);
    }
});

cmd({
        pattern: "support",
        desc: "Sends official support group link.",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text) => {
        citel.reply(`*Check your INBOX I LEFT SOMETHING THERE🤭 ${tlang().greet}*`);
        await Void.sendMessage(`${citel.sender}`, {
            image: log0,
            caption: `*Group Name: SAVIYA-MD-Support*\n*Group Link:* https://chat.whatsapp.com/I7i3biEnjlaGsKjrqk3oIj`,
        });

    }
);
