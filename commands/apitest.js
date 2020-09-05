module.exports = {
    name: 'apitest',
    cooldown: 10,
    async execute(message) {
        const { MessageEmbed } = require('discord.js');
        console.log('*apitest requested...')
        const fetch = require('node-fetch');
        const { fact } = await fetch('http://catfact.ninja/fact').then(response => response.json());
        const { text } = await fetch('https://uselessfacts.jsph.pl/random.json?language=en').then(response => response.json());
        const { facts } = await fetch('https://dog-api.kinduff.com/api/facts').then(response => response.json());
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        const { link } = await fetch('https://some-random-api.ml/img/dog').then(response => response.json());

        const embed = new MessageEmbed()
            .setColor('#d1bf66')
            .setTitle('api testing')
            .addFields(
                { name: 'catfact.ninja', value: fact },
                { name: 'uselessfacts.jsph.pl', value: text },
                { name: 'dog-api.kinduff.com', value: facts },
                { name: 'aws.random.cat', value: file },
                { name: 'some-random-api.ml', value: link }
            );

            message.channel.send(embed);
            console.log('done!')
    },
};