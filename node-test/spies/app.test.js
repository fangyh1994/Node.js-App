const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Yehe Fang', 24);
        expect(spy).toHaveBeenCalled('Yehe Fang', 24);
    });

    it('should call saveUser with user object', () => {
        var email = 'fangyh1994@gmail.com';
        var password = '123456';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});
