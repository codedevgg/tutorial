// CommonJS, every file is module (by default)
// Modules -Encapsulated Code (only share minimun)
const names = require('./4-NAMES.JS')
const sayHi = require('./5-UTILS.JS')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')
sayHi(names.john)
sayHi(names.peter)
sayHi('susan')

