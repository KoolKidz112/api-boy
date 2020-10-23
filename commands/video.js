module.exports = {
    name: 'video',
    description: 'returns a random video from the disc0rd api',
    async execute(message, args) {
        const fetch = require('node-fetch');
        /* (insert if !args.length search handling here) */
        vidyaUrl = 'https://www.disc0rd.xyz/video/';
        const vidya = await fetch(vidyaUrl, {
            method: 'GET'
        })

        message.channel.send(`***Provided by disc0rd.xyz*** ${vidya.url}`);
    }
}