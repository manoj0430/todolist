const express=require('express');
const app=express();

const port=8000;

// exporting routes

app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error is : ${err}`);
    }

    console.log(`Server is running up : ${port}`);
})