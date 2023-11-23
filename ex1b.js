//This is boilerplate code to write a simple web-server
const http = require("http");

http.createServer((req,res)=>{
    const randomNum = (Math.random()*19)+1
    const randomNum2 = Math.round(randomNum)
    res.write(`${randomNum2}`);
    res.end();
}).listen(3000);

