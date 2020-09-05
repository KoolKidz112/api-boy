module.exports = {
    name: 'dogs',
    description: 'le dog facts',
    cooldown: 3,
    execute(message) {
        console.log('*dogs requested...');
        const { facts } = await fetch('https://dog-api.kinduff.com/api/facts').then(response => response.json());
        const { link } = await fetch('https://some-random-api.ml/img/dog').then(response => response.json());

        const dogEmbed = new MessageEmbed()
        .setColor('#c446f2')
        .setTitle('dog fact')
        .setDescription(facts)
        .setImage(link)

        message.channel.send(dogEmbed);
        console.log('done!');
    },
};