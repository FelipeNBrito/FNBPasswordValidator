'use strict';

var expect = require('chai').expect;
var passwordValidator = require('../index');

describe('Password Validator', function() {

    it('should return false when password is undefined.', function() {

        var result = passwordValidator.validate();
        expect(result.valid).to.equal(false);
    });

    it('should return true when password is valid.', function(){
        var result = passwordValidator.validate("felipe*&^NevesBrit0");
        expect(result.valid).to.equal(true);
    });

    it('should return false when password is less than min length.', function(){
        var result = passwordValidator.validate("felipe*&^NevesBrit0", {min: 399});
        expect(result.valid).to.equal(false);
    });

    it('should return false when password is more than max length.', function(){
        var result = passwordValidator.validate("felipe*&^NevesBrit0", {max: 3});
        expect(result.valid).to.equal(false);
    });

    it('should return false when password has no lowercase.', function(){
        var result = passwordValidator.validate("FELIPENEVESBRITO1234**9", {lowercase: true});
        expect(result.valid).to.equal(false);
    });

    it('should return false when password has no uppercase.', function(){
        var result = passwordValidator.validate("felipenevesbrito4**9", {uppercase: true});
        expect(result.valid).to.equal(false);
    });

    it('should return false when password has no numbers.', function(){
        var result = passwordValidator.validate("felipenevesbrito4**9", {numbers: true});
        expect(result.valid).to.equal(false);
    });

    it('should return false when password has no special characters.', function(){
        var result = passwordValidator.validate("felipenevesbrFFito49", {specialCharacters: true});
        expect(result.valid).to.equal(false);
    });

    it('should return false when password has prohibited word.', function(){
        var result = passwordValidator.validate("felipenevesbr*FFito49", {prohibitedWords: ['felipe']});
        expect(result.valid).to.equal(false);
    });

    it('should return true when password has no prohibited words.', function(){
        var result = passwordValidator.validate("felipenevesbr*FFito49", {prohibitedWords: ['Brazil']});
        expect(result.valid).to.equal(true);
    });

    it('should return false when password has all default values.', function(){
        var result = passwordValidator.validate("felipenevesbr**90)FFito49");
        expect(result.valid).to.equal(true);
    });

});