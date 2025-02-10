let ar = [1,2,3,4,5];

// for(let i=0; i<ar.length;i++){
//     console.log(ar[i]);
// }

for(let i of ar){
    console.log(i);
}
console.log("------------------")
let obj = {'a':1,'b':2,'c':3,'d':4};
 for(let i in obj){
     console.log(obj[i]);//key
 }