# FNBPasswordValidator
> Validates passwords and helps you guarantee passwords more secure in your system.

[![npm](https://img.shields.io/npm/v/npm.svg?maxAge=2592000)]()
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)]()
[![Build Status](https://travis-ci.org/FelipeNBrito/FNBPasswordValidator.svg?branch=master)](https://travis-ci.org/FelipeNBrito/FNBPasswordValidator)
[![Coverage Status](https://coveralls.io/repos/github/FelipeNBrito/FNBPasswordValidator/badge.svg?branch=master)](https://coveralls.io/github/FelipeNBrito/FNBPasswordValidator?branch=master)

Make sure youre users have a secure password, checking for uppercase/lowercase letters, numbers, special characters, prohibited words (e.g. their name or email address), min/max password length, and passwords from the most common passwords list.


## Features

- [x] Uppercase verification
- [x] Lowercase verification
- [x] Numbers verification
- [x] Special Characters verification
- [x] Prohibited words verification
- [ ] Passwords list verification


##Installation
Install via NPM:

```ruby
npm install fnbpasswordvalidator

```

Client-side

```html
<script type="text/javascript" src="fnbpasswordvalidator.min.js"></script>
<script type="text/javascript">
  validate("somePassword*");
</script>
```

## Usage

```javascript 
passwordValidator.validate(password, options);
```

## Example

```javascript

var passwordValidator = require('fnbpasswordvalidator');

var password = "somePassword123*";

var passwordDetails = passwordValidator.validate(password, {prohibitedWords: [first_name, last_name, email],
                                                                min: 8,
                                                                specialCharacters: false});
if (!passwordDetails.valid) {
    res.json({success: false, message: passwordDetails.message});
    return; 
}
```
## Options

 * ``` min ``` : Password minimum length. Default: 8
 * ``` max ``` : Password maximum length. Default: 255
 * ```numbers``` : Numbers required. Default: true
 * ```uppercase```: Uppercase required. Default: true
 * ```lowercase```: Lowecase required. Default: true
 * ```specialCharacters```: Special Characters required. Default: true
 * ```prohibitedWords```: Words to be banned from the password. Array of strings.


## Contribute

We would love for you to contribute to *fnbpasswordvalidator*, check the ``LICENSE`` file for more info.

## Meta

Felipe N. Brito – me@felipenbrito.com

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/FelipeNBrito/FNBPasswordValidator/](https://github.com/FelipeNBrito/FNBPasswordValidator/)
