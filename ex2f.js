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

app.get('/products/category/:category',(req,res)=>{
    const prodData = JSON.parse(fs.readFileSync("data.json"));
    const category = req.params.category;
    let categoryList =[];
    prodData.forEach((e)=>{
        let containsCategory = false;
        e.productCategories.forEach((e)=>{
            if(e==category) containsCategory = true;
        })

        if(containsCategory){categoryList.push(e)}
    });

    if(categoryList.length == 0){res.status(404).send("No Products in this category")}
    res.send(`List of products in the category ${category}:\n ${makeHTMLListFromJSONArray(categoryList)}`)

});

app.listen(port, () => {})