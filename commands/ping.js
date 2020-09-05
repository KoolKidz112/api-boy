module.exports = {
    name: 'ping',
    description: 'hello world',
    execute(message,args) {
        message.channel.send('pong!!!!!!');
    },
};