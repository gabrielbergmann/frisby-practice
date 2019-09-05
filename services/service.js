const frisby = require('frisby');
const https = require('https');
const agent = new https.Agent({
    rejectUnauthorized: false
});
require('../config');
let token;

function login(user, password) {
    return frisby
        .post('https://platform-homologx.senior.com.br:8243/t/senior.com.br/bridge/1.0/rest/platform/authentication/actions/login', {
            agent,
            body: {
                "username": user,
                "password": password
            }
        })
}

function postRequest(url, body) {
    return frisby
        .post(url, {
            agent,
            body: {
                body
            }
        })
}

module.exports = {
    login,
    postRequest
}
