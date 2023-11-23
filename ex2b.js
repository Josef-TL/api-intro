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

app.get('/first', (req, res) => {
    const prodData = JSON.parse(fs.readFileSync("data.json"))
    res.send(prodData[0])
})

app.listen(port, () => {})