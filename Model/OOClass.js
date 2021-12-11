// function hello (initName) {
//     this.name = initName
// }

// const h1 = new hello('Hello')
// console.log(h1);

// // class
// class Topic{
//     constructor(initName) {
//         this.name = initName
//     }
// }

// const c1 = new Topic('Composite')
// console.log(c1);
//this current object

// class
class Topic {
    constructor(initName) {
        this.name = initName
        this.helo = this.hello.bind(this)
    }
    //bind function
    hello() {
        console.log("hello", this.name);
    }
    //no changed
    //create 100 times
    stay = () => {
        console.log("hello",this.name);
    }
    //only one
}
// function Topic(param) {
//     this.hello = function (param) {
        
//     }
//     //100 unit function
// }

// Topic.prototype.hello = function (param) {
    
// }
const c1 = new Topic('Composite')
//console.log(c1);
c1.hello()
c1.helo()
const adam = { name: 'adam' }
adam.helooo = c1.helo
adam.helooo()
adam.stay = c1.stay
adam.stay()