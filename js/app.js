
$(document).ready(function(){

	var userNum = 0; // declare user var first so it is avail inside/outside functions.
	var randNum = 0;

	function processInput() {
		event.preventDefault(); // prevents form from refreshing page
		var process_string = $("#userGuess").val();  // raw form value
		console.log(process_string); // display raw form value in console
		var userNum = parseInt(process_string, 10); // convert string to integer
		console.log("user input is " + userNum); // display converted string
		$("#userGuess").val('');
		if (userNum > 100 || userNum < 1) {
			// validate that the user guess is between 1 and 100
			console.log("user input, " + userNum + " is not valid");
			$('#guessList').append('<li id="warning">please enter a whole number between 1 and 100</li>');
		} else {
			console.log("user number, " + userNum + " is good to go");
			playGame(userNum);
		};
	}

	function playGame() {
		var randNum = Math.floor(Math.random() * 101); // create random number between 1 and 100
		console.log("random number is, " + randNum);  // display random number in console

	}

	function resetFeedback() {
		$('#warning').remove(); // reset user feedback
	}

	function resetForm(){
		$("#userGuess").val(''); // reset form field
	}

	$('form').on('submit', processInput);

// grab user's input from form --DONE
// convert raw value to integer --DONE
// write code that ensures that the user has supplied a numeric input between 1 and 100  --DONE
// generate secret number between 1 and 100   --DONE
// user feedback --> 50 or further away from the secret number, “Ice cold”
// user feedback --> Between 30 and 50, “cold”
// user feedback --> Between 20 and 30, "warm"
// user feedback --> Between 10 and 20, "hot" 
// user feedback --> Between 1 and 10, “very hot”
// track # of guesses until they guess the number
// Clicking “New Game” should trigger the JavaScript function that starts a new game without refreshing or reloading page.
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


