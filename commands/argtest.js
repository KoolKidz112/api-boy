module.exports = {
    name: 'argtest',
    description: 'test for arguments',
    execute(message, args) {
        if (!args.length) {
            return message.channel.send('no arguments provided');
        } else if (args[0] === 'stupid') {
            return message.channel.send('GRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR');
        }
        message.channel.send(`arguments: ${args}`);
    },
};