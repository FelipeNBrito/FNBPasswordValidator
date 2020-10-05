const i18next = require("./i18n");
//console.log(i18next.lng);
// use i18next.changeLanguage() function to change language
var passwordValidator = function(password, options) {

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
		
		if (!options.specialCharacters){
			specialCharacters = false;
		}
		prohibitedWords = options.prohibitedWords || prohibitedWords;
	}

	if (!password) {
		return {valid: false, message: i18next.t("undefinedPassword")};
	}

	if (password.length < min) {
		return {valid: false, message: i18next.t('minLength', { min: min })};
	}

	if (password.length > max) {
		return {valid: false, message: i18next.t('minLength', { max: max })};
	}

	if (!hasLowerCase(password) && lowercase) {
		return {valid: false, message: i18next.t('atLeastOneLowerChar')};
	}

	if (!hasUpperCase(password) && uppercase) {
		return {valid: false, message: i18next.t('atLeastUpperLowerChar')};
	}

	if(!hasSpecialCharacters(password) && specialCharacters) {
		return {valid: false, message: i18next.t('atLeastSpecialLowerChar')};
	}

	if(!hasNumber(password) && numbers) {
		return {valid: false, message: i18next.t('atLeastOneNumber')};
	}

	if(! (prohibitedWords == undefined) && hasProhibitedWord(password, prohibitedWords).result) {
		var word = hasProhibitedWord(password, prohibitedWords).word;
		return {valid: false, message: i18next.t('atLeastOneNumber', { word: word })};
	}

	return {valid: true, message: i18next.t('invalidPassword')};
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
