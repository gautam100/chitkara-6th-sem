/*

for(initilization; condition; updation){

	body of function
}

step 1: initilization
step 2: Condition [T/F]
step 3: body of function started to execute
step 4: updation
step 5: Go to step 2
-----------------------------------------
/*

5 X 1 = 5
5 X 2 = 10
5 X 3 = 15
.
.
.
5 X 10 = 50
*/

(function table(num){
	for(let i=1;i<=10;i++){
		console.log(num,"X",i,"=",num*i);
	}//for

})(5);
console.log("----------------------------");
(function table1(num){
	let i=1;
	while(i<11){
		console.log(num,"X",i,"=",num*i);
		i+=1;
	}
})(6);



