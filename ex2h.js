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

app.get('/products/:min/:max',(req,res)=>{
    const prodData = JSON.parse(fs.readFileSync("data.json"));
    const minPrice = Number(req.params.min);
    const maxPrice = Number(req.params.max);
    let prodList = [];

    prodData.forEach((e)=>{
        let isBetweeen = e.price < maxPrice && e.price > minPrice
        if(isBetweeen) prodList.push(e);
    });

    if(prodList.length == 0){res.status(404).send("No Products in this price range.")}
    res.send(`The following products costs between ${minPrice} and ${maxPrice}:\n 
    ${makeHTMLListFromJSONArray(prodList)}`)
});

app.listen(port, () => {})