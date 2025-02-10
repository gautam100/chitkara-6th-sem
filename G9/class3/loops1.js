/*
syntax of for

for(initilization; condition; update){

	-- body of function

}

step 1 : initilization
step 2 : condition [True/ False]
Step 3 : if  true, body of function
step 4 : update
step 5 : Go to step 2

Write a function which accepts a number and print table of that number.
5 X 1 = 5
5 X 2 = 10
.
.
.
5 X 10 = 50


*/



(function(num){

	for(let i=1;i<11;i++){
		console.log(num,"X",i,"=",num*i);
	}

})(5);










