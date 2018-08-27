const { env } = require('../config')

console.log('starting app in mode:', env);

require('./test-connection')
