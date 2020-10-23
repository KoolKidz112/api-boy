module.exports = {
    name: 'bored',
    description: 'fun(ish) acgtivies ito thlpe,w lg;ls lh;;;;;',
    async execute(message) {
        const fetch = require('node-fetch');
        const { MessageEmbed } = require('discord.js');

        const imbored = await fetch("https://www.boredapi.com/api/activity").then(response => response.json());

        const activityEmbed = new MessageEmbed()
            .setTitle(`Here's a(n) ${imbored.type} activity`)
            .setDescription(`${imbored.activity} (${imbored.participants} person/people)`)
            .setURL(imbored.link)

            // reminder: log link of the activity and id to console for debug (possibly)

            message.channel.send(activityEmbed);
    }
}