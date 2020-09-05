module.exports = {
    name: 'horoscope',
    description: 'horoscope',
    cooldown: 5,
    async execute(message, args) {
        const fetch = require('node-fetch');
        const { MessageEmbed } = require('discord.js');
        console.log('*horoscope requested...');
        const horoscopeURL = `https://aztro.sameerkumar.website?sign=${args}&day=today`;
        const hr = await fetch(horoscopeURL, {
            method: 'POST'
        })
        .then(response => response.json());
        console.log(args);
        if (!args.length) {
            return message.channel.send("please provide text for the output");
        } else if (args.length >= 2) {
            return message.channel.send("only one argument is allowed at the moment");
        } else if (hr.message) {
            return message.channel.send('please send a zodiac sign');
        } else {
            const horoscopeEmbed = new MessageEmbed()
                .setColor('#c446f2')
                .setTitle(`Horoscope for ${hr.current_date}`)
                .setDescription(`${hr.description} 
                Today's mood and color is ${hr.mood} and ${hr.color}, respectively. 
                You fare well with ${hr.compatibility}!`)
                .addFields(
                    { name: 'Luck-related things', value: `${hr.lucky_number} is your lucky number.
                    ${hr.lucky_time} is your lucky time. Keep an eye on the clock!`}
                )
            message.channel.send(horoscopeEmbed);
            console.log(hr);
        }
        console.log('done!');
    },
};