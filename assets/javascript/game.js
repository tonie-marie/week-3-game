// Sets the computer choices
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Declares the tallies to 0
var correct = 0;
var wrong = 0;
var wins = 0;
var losses = 0;
// When the user presses the key it records the keypress and then sets it to userguess
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	// This sets the computer guess equal to the random.
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	// Making sure the user chooses a letter
	if ((userGuess == 'a') || (userGuess == 'b') || (userGuess == 'c') || (userGuess == 'd') || (userGuess == 'e') || (userGuess == 'f') || (userGuess == 'g') || (userGuess == 'h') || (userGuess == 'i') || (userGuess == 'j') || (userGuess == 'k') || (userGuess == 'l') || (userGuess == 'm') || (userGuess == 'n') || (userGuess == 'o') || (userGuess == 'p') || (userGuess == 'q') || (userGuess == 'r') || (userGuess == 's') || (userGuess == 't') || (userGuess == 'u') || (userGuess == 'v') || (userGuess == 'w') || (userGuess == 'x') || (userGuess == 'y') || (userGuess == 'z')){
		// It tests to determine if the computer or the user won the round and then increments
		if ((userGuess == computerGuess)){
			correct++;
		}else if ((userGuess == 'a') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'a') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'r')){
			wrong++
		}else if ((userGuess == 'b') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'b') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'c') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'd') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'e') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'f') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'g') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'h') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'i') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'j') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'k') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'l') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'm') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'n') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'o') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'p') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'q') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'r') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 's') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 't') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'u') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'v') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'w') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'y')){
			wrong++;
		}else if ((userGuess == 'x') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'y') && (computerGuess == 'z')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'a')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'b')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'c')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'd')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'e')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'f')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'g')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'h')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'i')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'j')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'k')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'l')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'm')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'n')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'o')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'p')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'q')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'r')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 's')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 't')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'u')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'v')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'w')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'x')){
			wrong++;
		}else if ((userGuess == 'z') && (computerGuess == 'y')){
			wrong++;
		}
		// Taking the tallies and displaying them in HTML
		var html = 	"<p>Correct Guesses: " +
		correct +
		"</p>" +
		"<p>Wrong Guesses: " +
		wrong +
		"</p>";
		// Placing the html into the game ID
		document.querySelector('#game').innerHTML = html;
	}
	var counterHTML = "<p>Lost: " + losses + "</p>" +
		"<p>Wins: " + wins + "</p>"

	if(wrong == 10){
		$("#game").empty();
			alert('You loose!');
		losses++;
		document.querySelector('#counter').innerHTML = counterHTML;
		}
	if (correct == 1){
		$("#game").empty();
			alert('You win!');
		wins++;
		document.querySelector('#counter').innerHTML = counterHTML;
	}

}
