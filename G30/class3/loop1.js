/*
syntax of for

for(initialization; condition; update){
	
	--- body of loop

}
Step 1: initialization
Step 2: condition check [true/false]
Step 3: body of loop
Step 4: update
Step 5: Go to step 2

WAF in which pass a number and print table of it.

5 X 1 = 5
5 X 2 = 10
.
.
.
5 X 10 = 50
*/

(function printable(num){
	for(let i=1;i<11;i++){
		console.log(`${num} X ${i} = ${num*i}`);
	}

})(5);



