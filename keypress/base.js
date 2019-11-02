console.log("Sanity Check: JS is working!");

// Make sure you understand the following code before continuing!
document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded

})

let totalTime = document.querySelector("#total-time");
let startTime = false; 
let stopWatchStart = null; 
let stopWatchStop = null; 
let trackTime = function() {
	document.body.onkeydown = function(bananas){
		if(bananas.keyCode == 32){
			if(startTime){
				stopWatchStop = Date.now()
					startTime = false
					totalTime.textContent = (stopWatchStop - stopWatchStart) / 1000 + " secs"
					console.log("Time's Up") 
			}
			
			else{
				stopWatchStart = Date.now()
				startTime = true;
				console.log("Time Started!")
			}
		}
	}
}

document.addEventListener("keypress", trackTime()) 




