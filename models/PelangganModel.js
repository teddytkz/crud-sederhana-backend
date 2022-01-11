const { Model } = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../config/Database')

const Pelanggan = db.define(
    'pelanggan', {
    id_pelanggan: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama_pelanggan: {
        type: Sequelize.STRING
    },
    nomor_telepon: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
}
)

module.exports = Pelanggan