import i18next from "./i18n";

exports.validate = function(password, options) {

	let min = 8;	
	let max = 255;
	let numbers = true;
	let uppercase = true;
	let lowercase = true;
	let specialCharacters = true;
	let prohibitedWords = undefined;

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

let hasLowerCase = function(string) {
	return string.toUpperCase() !== string;
}

let hasUpperCase = function(string) {
	return string.toLowerCase() !== string;
}

let hasSpecialCharacters = function(string) {
	return /[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(string);
}

let hasNumber = function(string) {
	 return /[0-9]/.test(string); 
}

let hasProhibitedWord = function(string, prohibitedWords) {

	let lowerCaseString = string.toLowerCase();

	for (let i = prohibitedWords.length - 1; i >= 0; i--) {
		
		if (lowerCaseString.indexOf(prohibitedWords[i].toLowerCase()) != -1) {
			return {result: true, word: prohibitedWords[i]};
		}
	}

	return {result: false};
}
