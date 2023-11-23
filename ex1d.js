//This is boilerplate code to write a simple web-server
const http = require("http");

http.createServer((req,res)=>{
    const getRandomNum =()=> {return Math.round((Math.random()*19)+1)}
    let totalNum = 0;
    for (let i = 0; i < 10 ; i++) {
        totalNum += getRandomNum()
    }


    res.write(`The average of 10 numbers between 1-20: ${totalNum/10}`);
    res.end();
}).listen(3000);

