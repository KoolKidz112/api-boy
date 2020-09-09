module.exports = {
    name: 'joke',
    description: 'funy joke?? ? ? ?  ?yes funy',
    async execute(message, args) {
        const { MessageEmbed } = require('discord.js');
        const fetch = require('node-fetch');
        console.log("*joke requestes.. .. erueqre..s. .uhhh");
        var jokeURL = undefined;
        if (!args.length) {
            jokeURL = "https://icanhazdadjoke.com/"
        } else {
            jokeID = args;
            jokeURL = `https://icanhazdadjoke.com/j/${jokeID}`;
        }
        const lejoke = await fetch(jokeURL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        jokeID = lejoke.id;

        const JokeEmbed = new MessageEmbed()
            .setTitle("joke")
            .setDescription(lejoke.joke)
            .setFooter(`to see this joke again type *joke ${jokeID}`)

        message.channel.send(JokeEmbed);
        console.log(lejoke);
        console.log("done!");
    }
}