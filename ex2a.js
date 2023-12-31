//This is the boilerplate code to write a simple web-server with the express.js framework
const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000

function makeHTMLListFromJSONArray(data){
    let list = "<ul>";
    data.forEach((e)=>{
        list +="<li> "+ e.productName + "</li>"
    })

  return list+"</ul>"
}

app.get('/',(req,res)=>{
    res.send('')
});

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {})