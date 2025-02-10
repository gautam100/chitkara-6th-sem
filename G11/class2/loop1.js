/*
syntax: 

for(initialize; condition; update){
	
	body of loop

}
step 1: initialize
step 2: Check Condition [True/False]
step 3: if true, control will go inside the body of loop
step 4: update
step 5: Go to step 2

*/

/*
Write a function in which accept a number and print its table
5 X 1 = 5
5 X 2 = 10
.
.
.
5 X 10 = 50

*/


(function table(num){
	for(let i=1;i<=10;i++){
		console.log(`${num} X ${i} = ${num*i}`);
	}
})(5);