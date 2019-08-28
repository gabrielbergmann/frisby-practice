const service = require('../services/service');

describe('teste do método post - postman api', function() {
    it('deve incluit as informações de foo1', function() {
        let param = {'foo1': 'bar1'}
        return service.postPostman(param)
        .expect('status', 200)
    });
});

describe('teste do método get - postman api', function() {
    it('deve obter as informações de foo1', function() {
        return service.getPostman()
        .expect('status', 200)
        .expect('json', 'args', {
            foo1: 'bar1',
            foo2: 'bar2'
        })
    });
});