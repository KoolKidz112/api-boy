module.exports = {
    name: 'invite',
    description: 'displays bot invite',
    execute(message, args) {
        message.channel.send('http://discord.com/oauth2/authorize?client_id=746523325022470165&permissions=8&scope=bot');
    },
};