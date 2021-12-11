function hello() {
    console.log('Hello funtion');
}

hello()

function addMoney(price1, price2, discount) {
    return price1+price2-discount
}

cart = addMoney(5000, 500, 100)
console.log(cart);

function creatCart(initName) {
    this.name = name
}

const c1 = new creatCart('Jojo')
const c2 = new creatCart('Adam')
const c3 = new creatCart('Adam')
console.log(c1);
console.log(c2);
console.log(c3);

// Local
let hello = function () { }
let hello = () => { }
