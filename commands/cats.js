module.exports = {
    name: 'cats',
    description: 'lovely cat facts',
    cooldown: 3,
    execute(message) {
        console.log('*cats requested...')
        const { fact } = await fetch('http://catfact.ninja/fact').then(response => response.json());
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

        const catEmbed = new MessageEmbed()
            .setColor('#c446f2')
            .setTitle('cat fact')
            .setDescription(fact)
            .setImage(file)

        message.channel.send(catEmbed);
        console.log('done!');
    },
};