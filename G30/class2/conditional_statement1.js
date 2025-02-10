
function tvShow(channelNo=10){
	if(channelNo === 100){
		console.log("Sony Max");
	}else if(channelNo === 101){
		console.log("Ten sports");
	}else{
		console.log("some other channel");
	}

}

tvShow(100);//Sony Max
tvShow(101);//Ten Sports
tvShow(102);//some other channel