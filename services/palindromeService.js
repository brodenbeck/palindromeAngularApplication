var app = angular.module('angularApp');

app.factory('palindromeService', function() {
	
	var input;
	var reverseWord;

	function getWord(userInput) {
		input = userInput.toLowerCase();
		reverseWord = input.split('').reverse().join('');
	}

	function isPalindrome() {
		if(input === reverseWord) {
			return input + " is a palindrome."
		} else {
			return input + " is NOT a palindrome."
		}
	}

	return {
		getWord: getWord,
		isPalindrome: isPalindrome
	}
});