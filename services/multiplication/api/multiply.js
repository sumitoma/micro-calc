const process = require('process');

const axios = require('axios');

const addServiceHost = process.env.ADD_SERVICE_HOST ? process.env.ADD_SERVICE_HOST : '127.0.0.1';
const addServicePort = process.env.ADD_SERVICE_PORT ? process.env.ADD_SERVICE_PORT : '8080';

function addCall(result, x){
    return new Promise((resolve, reject)=>{
        const url = `http://${addServiceHost}:${addServicePort}/add?x=${result}&y=${x}`;
        axios.get(url).then((response)=>{
            resolve(response.data.result);
        }).catch((error)=>{ reject(error) });
   });  
}

module.exports = async function multiply(x, y){
    let result = 0;
    for(i=1;i<=y;i++){
        result = await addCall(result, x);
    }
    return result;
}
