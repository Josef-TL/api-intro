//This is boilerplate code to write a simple web-server
const http = require("http");

http.createServer((req,res)=>{
    res.write("Hello World");
    res.end();
}).listen(3000);

