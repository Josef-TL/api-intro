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

app.get('/products/:id', (req, res) => {
    const prodData = JSON.parse(fs.readFileSync("data.json"));
    const idParam = req.params.id;

    // ID er unikt, så leder kun efter det én gang
    prodData.forEach((e,i)=>{
        if(e.id==idParam){res.send(e)}
        else if(i==prodData.length-1){res.status(404).send('Sorry, no product found.')}
    });
});

app.listen(port, () => {})