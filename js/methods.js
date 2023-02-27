const student = {
    name : 'Mostafizur Rahman',
    money : 5000,
    study : 'English',
    subjects :['Approach and methods', 'Literary Criticism', 'Modern Drama'],
    exam :function(){
        return this.name +'is a good boy.'
    },
    improvement: function(subject){
        this.exam()
        return `${this.name}, is a good boy and make a good result in ${subject}`
    },

    treatDey :function(amount,tips){
        this.money = this.money - amount- 100
        return this.money
    }
}

student.exam();
const output = student.exam();
// console.log(output)

const output2 = student.improvement('sociology');
// console.log(output2)

const remaining = student.treatDey(1000,100);
console.log(remaining)