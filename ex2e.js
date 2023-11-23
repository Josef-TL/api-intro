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

app.get('/products/unavailable',(req,res)=>{
    const prodData = JSON.parse(fs.readFileSync("data.json"));
    let unavailableProducts = [];
    prodData.forEach((e)=>{
        if(e.stock==0){unavailableProducts.push(e)}
    })

    const unavailableList = makeHTMLListFromJSONArray(unavailableProducts)


    res.send("These products are zero stock: \n"+unavailableList)

});

app.listen(port, () => {})