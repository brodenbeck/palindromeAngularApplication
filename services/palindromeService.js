var app = angular.module('angularApp');

app.factory('palindromeService', function() {
	
	var input = "";
	var reverseWord = "";

	function getWord(userInput) {
		input += userInput;
		console.log(input);
		reverseWord += input.split('').reverse().join('');
		console.log(reverseWord);
	}

	function isPalindrome() {
		if(input === reverseWord) {
			return input + " is a palindrome."
		} else {
			return input + " is not a palindrome."
		}
	}

	return {
		getWord: getWord,
		isPalindrome: isPalindrome
	}
});