const http = require('http');
const data = require('./utils/data')

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');

    if(request.url.includes('/rickandmorty/character')){
        const id = request.url.split('/').at(-1)

        const characterFound = data.find((character) =>
            character.id === +id)

        return response.writeHead(200, {'Content-type': 'aplication/json'})
        .end(JSON.stringify(characterFound))
    }
})
.listen(3001, 'localhost')