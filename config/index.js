require('dotenv').config()

module.exports = {
  env: process.env.NODE_ENV || 'development',
  secret : process.env.SECRET_KEY || 'secret',
}
