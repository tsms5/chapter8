const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('gernerateMessage', ()=>{
    it('should generate correct message object', ()=>{
        var from = 'Mark';
        var text = 'Morning';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe('gernerateLocationMessage', ()=>{
    it('should generate correct location message object', ()=>{
        var from = 'Mark';
        var lat = 1;
        var lng = 2;
        var message = generateLocationMessage(from, lat, lng);
        var url = `https://map.baidu.com/?q=${lat},${lng}`;

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    });
});