var expect = require('unexpected');
var md2js = require('./md2js');

describe('md2js', function () {
    it('should export a register function', function () {
        return expect(md2js, 'to satisfy', {
            register: expect.it('to be a function')
        });
    });
});
