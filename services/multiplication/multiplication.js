const process = require('process');

const express = require('express');

const app = express();

const multiply = require('./api/multiply');

const STATUS = Object.freeze({
    BAD_REQUEST: 400 
});

app.get('/multiply', (req, res)=>{
    const queryParams = req.query;
    if(queryParams && queryParams.x && queryParams.y){
        let x = queryParams.x;
        let y = queryParams.y;
        if(isNaN(x) || isNaN(y)){
            res.sendStatus(STATUS.BAD_REQUEST);
        } else {
            x = Number(x);
            y = Number(y);
            if(Number.isInteger(x) && Number.isInteger(y)){
                let result = multiply(x, y);
                res.send("x * y = "+ result);
            } else {
                res.sendStatus(STATUS.BAD_REQUEST);
            }
        }
    } else {
        res.sendStatus(STATUS.BAD_REQUEST);
    }
});


app.listen(8080, ()=>{
    console.log("multiplication service is listening on port 8080");
});

module.exports = app;
