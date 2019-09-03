const service = require('../services/service');
const URL_LEADERSSITUATION = 'https://platform-homologx.senior.com.br/t/senior.com.br/bridge/1.0/rest/hcm/moods/queries/leadersSituation?activeEmployeeId=undefined';
const BODY_DATA = require('../json/moods/leaderSituation');


describe('Login', function () {
    it('Loga e obtem o token', function () {
        return service.login('colaborador1@autohcm01.com.br', 'senior123')
            .expect('status', 200)
        // .inspectResponse()
    });
});

describe('MOODS - Gestores avaliados', function () {
    it('Retornas gestores na hierarquia', function () {
        return service.postRequest(URL_LEADERSSITUATION, BODY_DATA)
            .expect('status', 200)
            .expect('jsonTypes', {
                'id': "E2A4080D9AF546FA8AE34A6E1E7428C2",
                'name': "Felipe Faust",
                'email': "felipe.faust@autohcm01.com.br",
                'subordinates': [
                    {
                        'd': "BDED2D006C0743849C0ECBDC88950072",
                        'name': "Daniel dos Anjos",
                        'email': "daniel.anjos@autohcm01.com.br",
                        'sentStatus': "LEADER_NOT_EVALUATED"
                    },
                    {
                        'id': "240E0DCBE2CE4B83B0AA4E6170D5FDEC",
                        'name': "Douglas Royer",
                        'email': "douglas.royer@autohcm01.com.br",
                        'sentStatus': "LEADER_NOT_EVALUATED"
                    },
                    {
                        "id": "18745FDB060448D98787F2090AA373E3",
                        "name": "Gabriel Bergmann",
                        "email": "gabriel.bergmann@autohcm01.com.br",
                        "sentStatus": "LEADER_NOT_EVALUATED"
                    }
                ]
            });
    });
});
