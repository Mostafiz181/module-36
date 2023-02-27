const numbers = [12, 23, 45, 55, 66, 30, 40];
for(const number of numbers){
    console.log(number)
};

const bottle = {
    color: 'Blue',
    price: 100,
    isCleaned: true,
    capacity: 1,

}

const keys = Object.keys(bottle);
console.log(keys);

for(const key of keys){
    console.log(key)
}

for(const key in bottle){
    console.log(key, bottle[key])
}

// advanced level

const pair = Object.entries(bottle)
console.log(pair);
for(const [key,value] of Object.entries(bottle)){
    console.log(key,value)
}