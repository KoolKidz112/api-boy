module.exports = {
    name: 'joke',
    description: 'funy joke?? ? ? ?  ?yes funy',
    execute(message, args) {
        var unirest = require("unirest");

        var req = unirest("POST", "https://joke3.p.rapidapi.com/v1/joke");

        req.headers({
	        "x-rapidapi-host": "joke3.p.rapidapi.com",
	        "x-rapidapi-key": "46511de4b9mshb9637d49a1ddc73p1f0779jsn3a7f36fb61d3",
	        "content-type": "application/json",
	        "accept": "application/json",
	        "useQueryString": true
        });

        req.type("json");
        req.send({
	        "content": "A joke here",
	        "nsfw": "false"
        });

        req.end(function (res) {
	        if (res.error) throw new Error(res.error);

	        console.log(res.body);
        });
    }
}