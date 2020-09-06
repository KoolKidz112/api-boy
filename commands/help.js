module.exports = {
    name: 'help',
    description: 'displays commands',
    execute(message, args) {
        const { MessageEmbed } = require('discord.js');

        const helpEmbed = new MessageEmbed()
            .setTitle('commands')
            .addFields(
                {name:'pets', value:'cats, dogs'},
                {name:'fun',value:'ai, joke'},
                {name:'information',value:'horoscope'},
                {name:'debug',value:'ping, argtest, apitest'},
                {name:'misc',value:'invite, help'}
            );

        message.channel.send(helpEmbed);
    },
};