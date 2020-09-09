const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'define',
    description: 'look up words using the owlbot dictionary',
    execute(message,args) {
        const secret = require("../bruh/config.json");
        const { MessageEmbed } = require('discord.js');

        var owlbot = require('owlbot-js');
        var client = owlbot(secret.owlBotKey);
        client.define(args).then(function(result){

            JSON.parse(result);

            console.log(result.definitions[1]);

            const definition = new MessageEmbed()
                .setTitle(`definition of ${args}`)
                .setDescription(`${result}
                Example: ${result.definitions.example}`)
                .setFooter('provided by owlbot');

            console.log(result.definitions[{definition}]);    
            message.channel.send(definition);
        });
    }
}