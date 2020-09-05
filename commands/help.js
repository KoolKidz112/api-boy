module.exports = {
    name: 'help',
    description: 'displays commands',
    execute(message, args) {
        message.channel.send('current list of commands (prefix is *): \n \nhelp\napitest\nping\ninvite\ncats\ndogs\nai\nhoroscope');
    },
};