const service = require('../services/service');
const pessoas = [
    {
        "id": "E2A4080D9AF546FA8AE34A6E1E7428C2",
        "name": "Felipe Faust",
        "email": "felipe.faust@autohcm01.com.br",
        "evaluated": false,
        "subordinates": [
            {
                "id": "BDED2D006C0743849C0ECBDC88950072",
                "name": "Daniel dos Anjos",
                "email": "daniel.anjos@autohcm01.com.br",
                "sentStatus": "LEADER_NOT_EVALUATED"
            },
            {
                "id": "240E0DCBE2CE4B83B0AA4E6170D5FDEC",
                "name": "Douglas Royer",
                "email": "douglas.royer@autohcm01.com.br",
                "sentStatus": "LEADER_NOT_EVALUATED"
            },
            {
                "id": "18745FDB060448D98787F2090AA373E3",
                "name": "Gabriel Bergmann",
                "email": "gabriel.bergmann@autohcm01.com.br",
                "sentStatus": "LEADER_NOT_EVALUATED"
            }
        ],
        "subordinatesCount": 3
    },
    {
        "id": "09F0677A7FC34242A24B604321ED8F12",
        "name": "Rafael Blumer",
        "email": "rafael.blumer@autohcm01.com.br",
        "evaluated": false,
        "subordinates": [
            {
                "id": "60AA8468270E43558531C256260E41A3",
                "name": "Igor Zavati",
                "email": "igor.zavati@autohcm01.com.br",
                "sentStatus": "LEADER_NOT_EVALUATED"
            }
        ],
        "subordinatesCount": 1
    },
    {
        "id": "E3B21DA597B54EB4908A771E734993F5",
        "name": "Tarciana Godri",
        "email": "tarciana.godri@autohcm01.com.br",
        "evaluated": false,
        "subordinates": [
            {
                "id": "E2A4080D9AF546FA8AE34A6E1E7428C2",
                "name": "Felipe Faust",
                "email": "felipe.faust@autohcm01.com.br",
                "sentStatus": "LEADER_NOT_EVALUATED"
            },
            {
                "id": "10FEC7004DF24779839ED1AE4264258C",
                "name": "Luiz Salvador",
                "email": "luiz.salvador@autohcm01.com.br",
                "sentStatus": "LEADER_NOT_EVALUATED"
            },
            {
                "id": "89909C25D394489EBBFE44556E33F0C1",
                "name": "Thayse Cardoso",
                "email": "thayse.cardoso@autohcm01.com.br",
                "sentStatus": "LEADER_NOT_EVALUATED"
            }
        ],
        "subordinatesCount": 3
    },
    {
        "id": "89909C25D394489EBBFE44556E33F0C1",
        "name": "Thayse Cardoso",
        "email": "thayse.cardoso@autohcm01.com.br",
        "evaluated": false,
        "subordinates": [
            {
                "id": "AA9BB4B995FB49E6A2B39C921DFD76B9",
                "name": "Cintia Maas",
                "email": "cintia.maas@autohcm01.com.br",
                "sentStatus": "LEADER_NOT_EVALUATED"
            },
            {
                "id": "09F0677A7FC34242A24B604321ED8F12",
                "name": "Rafael Blumer",
                "email": "rafael.blumer@autohcm01.com.br",
                "sentStatus": "LEADER_NOT_EVALUATED"
            },
            {
                "id": "0B4825CD7F45453B9297BCBBBADA0195",
                "name": "Tamara Lima",
                "email": "tamara.lima@autohcm01.com.br",
                "sentStatus": "LEADER_NOT_EVALUATED"
            }
        ],
        "subordinatesCount": 3
    }
]


describe('Login', function () {
    it('Loga e obtem o token', function () {
        return service.login('colaborador1@autohcm01.com.br', 'senior123')
            .expect('status', 200)
        // .inspectResponse()
    });
});

describe('MOODS - Gestores avaliados', function () {
    it('Retornas gestores na hierarquia', function () {
        return service.postLeaderSituation()
            .expect('status', 200)
            .expect('json', 'leaders', {
                pessoas
            });
    });
});