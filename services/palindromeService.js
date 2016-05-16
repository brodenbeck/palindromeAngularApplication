var app = angular.module('angularApp');

app.factory('palindromeService', function() {
	
	var input;
	var reverseWord;
	var words = [];

	function getWord(userInput) {
		input = userInput.toLowerCase();
		reverseWord = input.split('').reverse().join('');
	}

	function isPalindrome() {
		if(input === reverseWord) {
			words.push(input + ' is a palindrome.')
			return words;
		} else {
			words.push(input + ' is NOT a palindrome.')
			return words;
		}
	}

	return {
		getWord: getWord,
		isPalindrome: isPalindrome
	}
});