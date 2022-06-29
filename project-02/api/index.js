const http = require('http')
const data = require('./urls.json')
const URL = require('url')
http.createServer((req, res) => {
    console.log(URL.parse(req.url,true).query)
    const {name,url,del} = URL.parse(req.url,true).query
    if(!name || !url) 
       return res.end(JSON.stringify(data))
    if(del) 
       return res.end('delete')

    return res.end('create')
}).listen(3000, () => console.log('API is running'))


