module.exports = {
    name: 'define',
    description: 'look up words using the owlbot dictionary',
    execute(message,args) {
        const secret = require("../bruh/config.json");
        const { MessageEmbed } = require('discord.js');

        var owlbot = require('owlbot-js');
        var client = owlbot(secret.owlBotKey);
        client.define(args).then(function(result){
            
            console.log(result.definitions[1]);
            for (i in result.definitions) {
                def = result.definitions[i];
                var data = def;
            }

            const definitionEmbed = new MessageEmbed()
                .setTitle(`definition of ${args} (${data.type})`)
                .setDescription(`${data.definition}
                Example: ${data.example}`)
                .setFooter('provided by owlbot');
            
            message.channel.send(definitionEmbed);
        });
    }
}