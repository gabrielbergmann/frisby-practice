const frisby = require('frisby');
const https = require('https');
const agent = new https.Agent({
    rejectUnauthorized: false
});
const testeRemeuna = new 


frisby.globalSetup({
    request: {
        headers: {
            'Content-Type': 'application/json',
        }
    }
});

describe('teste do método post - postman api', function() {
    it('deve registrar as informações de foo1', function() {
        return frisby 
        .post('https://postman-echo.com/post', {
            agent,
            body: teste
        })
        .expect('status', 200)
    });
});

describe('teste do método put - postman api', function() {
    it('deve atualizar as informações de foo1', function() {
        return frisby 
        .post('https://postman-echo.com/post', {
            agent,
            body: JSON.stringify({
                'foo1': 'bar2'
            })
        })
        .expect('status', 200)
    });
});