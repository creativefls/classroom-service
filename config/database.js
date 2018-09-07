require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.PG_USERNAME || '',
    "password": process.env.PG_PASSWORD || '',
    "database": process.env.PG_DATABASE || 'fls_class',
    "host": process.env.PG_HOSTNAME || '',
    "dialect": "postgres",
    "logging": false,
    "pool": {
      "max": 5,
      "min": 0,
      "acquire": 60000
    }
  },
  "test": {
    "username": "bukalelang",
    "password": "bukalelang",
    "database": "bukalelang-db",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.PG_USERNAME || '',
    "password": process.env.PG_PASSWORD || '',
    "database": process.env.PG_DATABASE || 'bukalelang-db',
    "host": process.env.PG_HOSTNAME || '',
    "dialect": "postgres"
  }
}
