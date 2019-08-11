var request = require('request');

var headers = {
    'Content-Type': 'application/json'
}

var options = {
    url: 'https://www.reddit.com/r/websecurityresearch/new.json',
    method: 'GET',
    headers: headers,
    json: true,
}

request(options, function (error, response, body) {
    const data = body.data.children;
    var result = [];
    data.forEach(element => {
        result.push({title: element.data.title, url: element.data.url});
    });
    console.log(result);
})