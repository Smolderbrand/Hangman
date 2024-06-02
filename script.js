var word;
var guessed;

function start() {
	var words = ["veterotestamentary", "apple", "banana", "rotten", "disgrace", "hoeflation", "mineral", "automotive", "fit", "call"];
	var choice = Math.floor(Math.random() * words.length);
	word = words[choice];
	answer = Math.floor(Math.random() * 3) + 1;
	var noAnswer = "";
	guessed = "";
	for (var i = 0; i < word.length; ++i)
		noAnswer += "_ ";
	document.getElementById("game_panel").textContent = noAnswer;
}

function validate(input) {
	input.value = input.value.replace(/\W|\d/g, '').substr(0, 1).toLowerCase();
}

function clickGuess() {
	guessed += document.getElementById("search_char").value;
	var lives = 7;
	var flag = 0;
	var guessedLetters = 0;
	var newString = "";
	for (var i = 0; i < window.guessed.length; ++i) {
		flag = 0;
		for (var j = 0; j < word.length; ++j)
			if (guessed[i] == word[j])
				flag = 1;
		if (flag == 0)
			lives -= 1;
	}
	for (var i = 0; i < word.length; ++i) {
		flag = 0;
		for (var j = 0; j < guessed.length; ++j)
			if (word[i] == guessed[j])
				flag = 1;
		if (flag == 0)
			newString += "_ ";
		if (flag == 1) {
			newString += word[i] + " ";
			guessedLetters += 1;
		}
	}
	document.getElementById("game_panel").textContent = newString;
	if ((guessedLetters == word.length) && (lives > 0)) {
		document.getElementById("game_stats").textContent = "You won!";
	} else {
		if (lives <= 0)
			document.getElementById("game_stats").textContent = "You lost!";
		else
			document.getElementById("game_stats").textContent = "You have " + lives + " lives left.";
	}
}
