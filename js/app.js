
$(document).ready(function(){

	var userNum; // declare vars first so it is avail inside/outside functions.
	var randNum = Math.floor(Math.random() * 100 +1); // create random number between 1 and 100


	function processInput(event) {
		event.preventDefault(); // prevents form from refreshing page
		var process_string = $("#userGuess").val();  // raw form value
		console.log("raw user input string is: " + process_string); // display raw form value in console
		var userNum = parseInt(process_string, 10); // convert string to integer
		console.log("user input converted to integer is " + userNum); // display converted string
		$("#userGuess").val('');

		if ( isNaN( userNum )) {
			// test if user input is NaN
			console.log("user input, " + userNum + " is not valid");
			$('#feedback').remove();
			$('.game').prepend('<h2 id="feedback">Guess again. Please enter a whole number between 1 and 100.</h2>'); }

		else if (userNum > 100 || userNum < 1) {
			// validate that the user guess is between 1 and 100
			console.log("user input, " + userNum + " is not valid");
			$('#feedback').remove();
			$('.game').prepend('<h2 id="feedback">Guess again. Please enter a whole number between 1 and 100.</h2>');
		} else {
			console.log("user number, " + userNum + " is good to go");
			playGame(userNum);
		};
	}

	function playGame(val) {
		var userNum = val;
		// if randNum exists keep it
		console.log("randNum was generated and is: " + randNum); // display random number in console
		console.log("passed user number is: " + userNum);  // display user number in console
		if (userNum === randNum) {
			$('#feedback').remove();
			$('.game').prepend('<h2 id="feedback">Winner winner chicken dinner.</h2>');
		} else if (userNum !== randNum) {
			$('#feedback').remove();
			$('.game').prepend('<h2 id="feedback">try again pal.</h2>');
			// here is where you should add the additional logic. If Between 30 and 50, “cold” ,Between 20 and 30, "warm", etc
			// currently the game logic only checks to see if the user and random nums are equal or not. 
			// Note: the game does not reset at this point. The game is accepting new inputs. 
			// It needs to prevent reset of randNum for the game to work and properly compare the 2 vars.
		}
	}

	function newGame() {
		$("#userGuess").val(''); // reset form field
		userNum = 0;
		randNum = Math.floor(Math.random() * 100 +1); // create random number between 1 and 100
		$('#feedback').remove();
		$('.game').prepend('<h2 id="feedback">Make your guess</h2>');
	}

	$('form').on('submit', processInput);
	$('.new').on('click', newGame);

// Clicking “New Game” should trigger the JavaScript function that starts a new game without refreshing or reloading page.  --DONE
// grab user's input from form --DONE
// convert raw value of user input to integer --DONE
// write code that ensures that the user has supplied a numeric input between 1 and 100  --DONE
// generate secret number between 1 and 100   --DONE
// pass userNum var from function processInput() to function playGame() --DONE
// user feedback --> 50 or further away from the secret number, “Ice cold”
// user feedback --> Between 30 and 50, “cold”
// user feedback --> Between 20 and 30, "warm"
// user feedback --> Between 10 and 20, "hot" 
// user feedback --> Between 1 and 10, “very hot”
// track # of guesses until they guess the number

	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


