(function () {

// private methods
	
	function randomized (data, prev) {
		var i = Math.floor(Math.random() * (data.length));

		if(i === prev) {
			console.log('collide');
			randomized(data, prev);
		}
		return i;
	}
	


// public methods 

	var randomizer = function (data) {
		return randomized(data);
	}

	randomizer.bindOnEvent = function (data) {

		var random = randomized(data);

		return function (){
			random = randomized(data, random);
			console.log(data[random]);
		}
	}


	if (typeof window !== 'undefined' && typeof ender === 'undefined') {
        window.randomizer = randomizer;
    }
})();






