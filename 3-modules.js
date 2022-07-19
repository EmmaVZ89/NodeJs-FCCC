// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
console.log(data);

require('./7-mind-grenade');

sayHi('Emma');
sayHi(names.john);
sayHi(names.peter);