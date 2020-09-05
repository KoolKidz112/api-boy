module.exports = {
    name: 'ai',
    description: 'uses text2image api to bring you nightmares daily',
    cooldown: 5,
    execute(message, args) {
        console.log('*ai requested...');
        const input = args
        if (!args.length) {
            return message.channel.send("please provide text for the output");
        } else if (args.length >= 2) {
            return message.channel.send("only one argument is allowed at the moment");
        } else {
            var resp = await deepai.callStandardApi("text2img", {
                text: `${input}`,
            });
            
            const aiEmbed = new MessageEmbed()
                .setColor('#c446f2')
                .setTitle('text2image')
                .setImage(resp.output_url)
                .setFooter('Provided by deepai.org')
    
            message.channel.send(aiEmbed);
            console.log('done!');
        }
    },
};