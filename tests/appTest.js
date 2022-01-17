const {assert,expect} = require('chai');
const app = require('../app');


describe('App', ()=>{
    describe('sayHello', ()=>{
        it('sayHello should return hello', ()=>{
            let result = app.sayHello();
             assert.equal(result, 'Hello');
         });
         it('sayHello should return type string', ()=>{
             let result= app.sayHello();
             assert.typeOf(result, 'string')
         });
    })
   describe('addNumbers',()=>{
    it('addNumbers should return value greater than 5', ()=>{
        let result = app.addNumbers(5,8);
        assert.isAbove(result,5);
    });
    it('addNumber should return type number', ()=>{
        let result= app.addNumbers();
        assert.typeOf(result, 'number')
    });
    it('addNumber should be able to add one number if the other argument is not provided', ()=>{
        let result = app.addNumbers(2);
        expect(result).to.be.eq(2);
    });
    it('addNumber should accept arguments of same datatype', ()=>{
        // let result = app.addNumbers(2,2);
        // expect(result).to.be.eq(4);
        let result = app.addNumbers('ola','love');
        expect(result).to.be.string('olalove');
    });
   })
   

})