// 1. When a user presses the record button, start recording actions
// 2. When recording, push an object with the important data to the array
//			- Clear the array before starting a new recording
// 3. Stop a recording by pressing the same button
//			- Print all of the position to the console using forEach: 123px 345px
// 4. Replay the recording by iterating through the Array and move a custom cursor to the position that was recorded
//			- Ensure there is not current a recording going on (various ways to prevent that case)



// DOM elements
const $startAndStop = document.getElementById('startAndStop')
const $replayRecording = document.getElementById('replayRecording')
const $cursor = document.getElementById('cursor')

// Variables/data
let isRecording = false
let mouseMoves = [
	// Examples:
	// {x: 123, y:212, t:0},
	// {x: 220, y:317, t:100},
	// {x: 126, y:218, t:145},
]

// Each movement of the mouse
window.addEventListener('mousemove', (event) => {
	if (isRecording) {
		console.log(event.clientX, event.clientY, event.timeStamp)
		mouseMoves.push({xValue:event.clientX , yValue:event.clientY})
		// Record the data to the Array
	  // this is one of many ways to prevent recording, consider you may also use removeEventListener() as well

	}
})

// Start/stop the recording
$startAndStop.addEventListener('click', (event) => {
	isRecording = !isRecording
	if (isRecording){
		console.log("stop")
		mouseMoves = []
	}
	

})

// Replay recording
$replayRecording.addEventListener('click', (event) => {
	
	// Set the x and y for each mouse move recorded (123, 456 are examples)
	// setTimeout(() => {
	// 	for (i=0; i<mouseMoves.length; i++) {
	// 		$cursor.style.setProperty('--x', mouseMoves[i].xValue)
	// 		$cursor.style.setProperty('--y', mouseMoves[i].yValue)
	// 	}
	// }, 500);




function record (i) {
	if (i < (mouseMoves.length - 1)) {    // MouseMoves is an array of stored coordinates
		setTimeout (function(){
			$cursor.style.setProperty('--x', mouseMoves[i].xValue)
			$cursor.style.setProperty('--y', mouseMoves[i].yValue) 
			i++;
			record (i);    // Call recursively
		}, 100);
	} else {
		mouseMoves = [];
	}
}
record (0);
})


// reference for replay taken from @Kay as I have tried using for loop and forEach but things did'nt went through.
