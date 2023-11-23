const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000

function makeHTMLListFromJSONArray(data){
    let list = "<ul>";
    data.forEach((e)=>{
        list +="<li> "+ e.productName + "price: "+ e.price + "</li>"
    })

    return list+"</ul>"
}

function compareByPrice(a, b) {
    return a.price - b.price;
}

app.get('/products/sortprice',(req,res)=>{
    const prodData = JSON.parse(fs.readFileSync("data.json"));

    prodData.sort(compareByPrice)

    res.send(`These items are sorted by price, lowest to highest: \n 
    ${makeHTMLListFromJSONArray(prodData)}`)

});


app.listen(port, () => {})