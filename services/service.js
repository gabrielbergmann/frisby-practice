const frisby = require('frisby');
const https = require('https');
const agent = new https.Agent({
    rejectUnauthorized: false
});
require('../config')

function postPostman(param1){
    return frisby 
    .post('https://postman-echo.com/post', {
        agent,
        body: param1
    })
}

function getPostman(){
    return frisby
    .get('https://postman-echo.com/get?foo1=bar1&foo2=bar2', {agent})
}

module.exports = {
    postPostman,
    getPostman
}