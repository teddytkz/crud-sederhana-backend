const sequelize = require('Sequelize')

const db = new sequelize('crud_sederhana', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = db