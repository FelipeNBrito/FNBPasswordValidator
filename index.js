exports.validate = function(password, options) {

	var min = 8;	// Password max length
	var max = 255;	// Password min length
	var numbers = true;
	var uppercase = true;
	var lowercase = true;
	var specialCharacters = true;
	var prohibitedWords = undefined;

	if (typeof(options) === 'object') {

		min = options.min || min;
		max = options.max || max;
		numbers = options.numbers || numbers;
		uppercase = options.uppercase || uppercase;
		lowercase = options.lowercase || lowercase;
		specialCharacters = options.specialCharacters || specialCharacters;
		prohibitedWords = options.prohibitedWords || prohibitedWords;
	}

	if (!password) {
		return {valid: false, message: "Password undefined."};
	}

	if (password.length < min) {
		return {valid: false, message: "Password must be at least " + min + " chatacters long."};
	}

	if (password.length > max) {
		return {valid: false, message: "Password must be no longer than " + max + " chatacters long."};
	}

	if (!hasLowerCase(password) && lowercase) {
		return {valid: false, message: "Password must have at least one lowercase character."};
	}

	if (!hasUpperCase(password) && uppercase) {
		return {valid: false, message: "Password must have at least one uppercase character."};
	}

	if(!hasSpecialCharacters(password) && specialCharacters) {
		return {valid: false, message: "Password must have at least one special character."};
	}

	if(!hasNumber(password) && numbers) {
		return {valid: false, message: "Password must have at least one number."};
	}

	if(! (prohibitedWords == undefined) && hasProhibitedWord(password, prohibitedWords).result) {
		var word = hasProhibitedWord(password, prohibitedWords).word;
		return {valid: false, message: "Password contains the invalid word: " + word};
	}

	return {valid: true, message: "Password is valid."};
}

var hasLowerCase = function(string) {
	return string.toUpperCase() !== string;
}

var hasUpperCase = function(string) {
	return string.toLowerCase() !== string;
}

var hasSpecialCharacters = function(string) {
	return /[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(string);
}

var hasNumber = function(string) {
	 return /[0-9]/.test(string); 
}

var hasProhibitedWord = function(string, prohibitedWords) {

	var lowerCaseString = string.toLowerCase();

	for (var i = prohibitedWords.length - 1; i >= 0; i--) {
		
		if (lowerCaseString.indexOf(prohibitedWords[i].toLowerCase()) != -1) {
			return {result: true, word: prohibitedWords[i]};
		}
	}

	return {result: false};
}