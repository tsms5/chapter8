const expect = require('expect');

const {generateMessage} = require('./message');

describe('gernerateMessage', ()=>{
    it('should generate correct message object', ()=>{
        var from = 'Mark';
        var text = 'Morning';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});