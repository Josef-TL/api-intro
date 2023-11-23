//This is boilerplate code to write a simple web-server
const http = require("http");

http.createServer((req,res)=>{
    const randomNum = Math.round((Math.random()*3))
    const season = ["Spring","Summer","Fall","Winter"];


    res.write(`${season[randomNum]}`);
    res.end();
}).listen(3000);

