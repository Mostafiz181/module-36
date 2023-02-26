//object literal

const player = {};
player.name = 'mostafiz';
player.specialty ='bowler';
player.ball = function(){
    console.log('throw your ball');
}

// console.log(player);
// player.ball();

const student = {
    name : 'Rubel',
    job : 'Batsman',
    ball : function(){
        console.log('ball korte valoi pare')
    },
    sellary : 20000,
}

// console.log(student);
// student.ball();

const person = new Object();
// console.log(person);

const item = Object.create(null);
console.log(item);

const atel = Object.create(student);
// console.log(atel.job)

class person1 {
    name = 'abul';
    address = 'abul bari';
    constructor(age){
        this.age = age
    }

    

}

const person2 = new person1 (30);
console.log(person2);

