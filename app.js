// module.exports= function () {
//     return 'hello';
// }

module.exports = {
    sayHello: function(){
        return 'Hello';
    },
    addNumbers: function(val1=0,val2=0){
        if(val1 !== typeof('number') &&  val2 !== typeof('number')){
            return val1 + val2
        } 
        return val1+val2;
    }
}

