const expect = require('expect');

const utils = require('./utils');

describe('Utils', ()=> {

    describe('#add', () => {
        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            })
        });
    })
    it('should add two numbers', () => {
        var res = utils.add(33,11);
        expect(res).toBe(44).toBeA('number');
        // if (res !== 44) {
        //     throw new Error(`Expected 44, but got ${res}.`)
        // }
    });

    

    it('should square a number', () => {
        var res = utils.square(5);
        expect(res).toBe(25).toBeA('number');
        // if (res !== 25) {
        //     throw new Error(`Expected 25, but got ${res}.`)
        // }
    });

    it('should async square a number', (done) => {
        utils.asyncSquare(5, (res) => {
            expect(res).toBe(25).toBeA('number');
            done();
        });
    });
});



it('should set first and last names', () => {
    var user = {location: 'Waterloo', age: 24};
    var res = utils.setName(user, 'Yehe Fang');

    expect(res).toInclude({
        firstName: 'Yehe',
        lastName: 'Fang'
    });
});

// it('should expect some values', () => {
//     //expect(12).toNotBe(12);
//     //expect({name: 'Yehe Fang'}).toEqual({name: 'Yehe Fang'})
//     //expect([2,3,4]).toInclude(2);
//     expect({
//         name: 'Yehe Fang',
//         age: 24,
//         location: 'Waterloo'
//     }).toInclude({
//         age: 24
//     })
// });