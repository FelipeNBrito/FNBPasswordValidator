'use strict';

var expect = require('chai').expect;
var passwordValidator = require('../index');

describe('Password Validator', function() {

    it('should return false when password is undefined.', function() {

        var result = passwordValidator.validate();
        expect(result.valid).to.equal(false);
    });
});