const first = {a:2, c:5, d:2};
const second = {a:5, b:3, c:2};
if(first === second){
    console.log('they are same')
}else{
    console.log("they are different")
};


const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
console.log(firstString,secondString);

if(firstString=== secondString){
    console.log('true')
}else{
    console.log('false')
};

function compareObject (first,second){
    const firstKeys = Object.keys(first);
    const secondKeys =Object.keys(second);

    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            // console.log(key)
            if(first [key] !== second [key]){
                return true;
            }
        }return false;
    }else
    return false;
}

const result = compareObject(first,second);
console.log(result)