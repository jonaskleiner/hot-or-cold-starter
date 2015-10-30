
$(document).ready(function(){

	var userNum = 0; // declare user var first so it is avail inside/outside functions.

	function processInput() {
		event.preventDefault(); // prevents form from refreshing page
		var process_string = $("#userGuess").val();  // raw form value
		console.log(process_string); // display raw form value in console
	}

	$('form').on('submit', processInput);
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

// grab user's guess, an integer, from form
// write code that ensures that the user has supplied a numeric input between 1 and 100
// generate secret number between 1 and 100
// user feedback --> 50 or further away from the secret number, “Ice cold”
// user feedback --> Between 30 and 50, “cold”
// user feedback --> Between 20 and 30, "warm"
// user feedback --> Between 10 and 20, "hot" 
// user feedback --> Between 1 and 10, “very hot”
// track # of guesses until they guess the number
// Clicking “New Game” should trigger the JavaScript function that starts a new game without refreshing or reloading page.
