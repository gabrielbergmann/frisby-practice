const frisby = require('frisby');
const https = require('https');
const agent = new https.Agent({
    rejectUnauthorized: false
});
require('../config');
let json2

const url = ' https://platform-homologx.senior.com.br:8243/t/senior.com.br/bridge/1.0/rest/'

function login(user, password) {
    return frisby
        .post('https://platform-homologx.senior.com.br:8243/t/senior.com.br/bridge/1.0/rest/platform/authentication/actions/login', {
            agent,
            body: {
                "username": user,
                "password": password
            }
        })
        .then((resp) => {
            let response = resp.json;
            json2 = JSON.parse(JSON.stringify(response.jsonToken));
            return frisby.globalSetup({
                request: {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + json2.substring(164, 196)
                    }
                }
            })
        })
        .catch(error => {
            console.error("Error:: " + error);
            throw error;
        })
}

function postLeaderSituation() {
    return frisby
        .post('https://platform-homologx.senior.com.br/t/senior.com.br/bridge/1.0/rest/hcm/moods/queries/leadersSituation?activeEmployeeId=undefined', {
            agent,
            body: {
                "q": null, "page": 1,
                "size": 10
            }
        })
}

module.exports = {
    login,
    postLeaderSituation
}
//4fd0077c7483c3e4ea0feff60a293404
//            config.bearer = json2.substring(164, 196);
