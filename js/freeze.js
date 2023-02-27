const bottle = {
    color: 'Blue',
    price: 100,
    isCleaned: true,
    capacity: 1,

}

const keys = Object.keys(bottle);
// console.log(keys)

const values = Object.values(bottle);
// console.log(values)

const pairs =Object.entries(bottle);
// console.log(pairs)

console.log(bottle);
// delete bottle.isCleaned;
// console.log(bottle)
Object.seal(bottle);
bottle.price = 300,
bottle.height = 2,
console.log(bottle);
Object.freeze(bottle);
console.log(bottle)