module.exports = {
    name: 'video',
    description: 'returns a random video from the disc0rd api',
    async execute(message, args) {
        const fetch = require('node-fetch');
        /* (insert if !args.length search handling here) */
        vidyaUrl = 'https://www.disc0rd.xyz/api/videos';
        const vidya = await fetch(vidyaUrl, {
            method: 'GET'
        })
        .then(response => response.json())

        message.channel.send(vidya.url);
    }
}