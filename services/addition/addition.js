const process = require('process');

const express = require('express');

const app = express();

const add = require('./api/add');

const STATUS = Object.freeze({
    BAD_REQUEST: 400 
});

app.get('/add', (req, res)=>{
    const queryParams = req.query;
    if(queryParams && queryParams.x && queryParams.y){
        let x = queryParams.x;
        let y = queryParams.y;
        if(isNaN(x) || isNaN(y)){
            res.sendStatus(STATUS.BAD_REQUEST);
        } else {
            let result = add(Number(x), Number(y));
            res.send({
                result: result
            });
        }
    } else {
        res.sendStatus(STATUS.BAD_REQUEST);
    }
});


app.listen(8080, ()=>{
    console.log("addition service is listening on port 8080");
});

module.exports = app;

