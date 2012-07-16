function simulateAjaxCall(callback){
	setTimeout(callback, 5000);	
}

function roar(){
	simulateAjaxCall(function(){
		console.log('Done iterating over 1B. Phew!');
	});

	console.log('Will this go first ?');
}