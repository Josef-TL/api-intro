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

app.get('/products/:id/availability',(req,res)=>{
    const prodData = JSON.parse(fs.readFileSync("data.json"));
    const prodID = req.params.id;

    prodData.forEach((e,i)=>{
        const isAvailable = e.stock > 0;

        if(e.id==prodID){
            if(isAvailable){res.send(`This product has ${e.stock} items left`)}
            else{res.send("This item is unavailable.")}
        }
        else if(i==prodData.length-1){res.status(404).send('Sorry, no product found.')}
    });
});

app.listen(port, () => {})