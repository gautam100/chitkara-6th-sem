function sum(){
    let ar = [1,2,3,4,5];
    sum = 0 ;
    for(let i of ar){
        sum +=i; 
    }
    return sum;
}
console.log(sum());

function multiply(){
    let obj = {'a':1,'b':2,'c':3,'d':4};
    let res = 1 ;
    for(let i in obj){
        res *=obj[i]; 
    }
    return res;
}
console.log(multiply());

