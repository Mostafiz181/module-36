const kadamAli ={
    name :'kadom Ali',
    money:5000,
    study:'math',
    subject:['calculus', 'algebra', 'geometry'],
    treatDey:function(amount,tips){
        this.money = this.money-amount-tips
        return this.money
    },
    exam :function(){
        return this.name +'is a good boy.'
    },

};


const badamAli ={
    name :'badam Ali',
    money:8000,
};

const kire = kadamAli.exam.call(badamAli);
console.log(kire);

const badamMoney = kadamAli.treatDey.call(badamAli,3000,100);
console.log(badamMoney);

const badamMoney2 = kadamAli.treatDey.apply(badamAli,[2000,500]);
console.log(badamMoney2);

const badamTreat = kadamAli.treatDey.bind(badamAli);
const remaining = badamTreat(1000,200);
console.log(remaining)


