/*
syntax of while:

initialize;

while(condition){

 --- body of loop

 update	
}

*/

function MyFunc(num){
	let isPrime = true;
	let i=2;
	while(i<num){
		if(num%i === 0){
			isPrime = false;
			break;
		}//if
		i+=1;
	}//while
	
	if(isPrime === true){
		console.log(num,"is a prime number");
	}else{
		console.log(num,"is a not a prime number");
	}

}

MyFunc(7);

