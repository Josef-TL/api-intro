
/*
Hapset fra W3 Schools
 */
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];



//This is boilerplate code to write a simple web-server
const http = require("http");

http.createServer((req,res)=>{
    const d = new Date();
    let day = weekday[d.getDay()];

    const erDetFredag = d.getDay==5?"Yes":"No"

    res.write(`${day} \n`);
    res.write(`Er det fredag? ${erDetFredag}`)
    res.end();
}).listen(3000);

