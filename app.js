require('dotenv').config()
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const apiRouter = require('./routes/api')
const Pelanggan = require('./models/PelangganModel')
const db = require('./config/Database')

const PORT = process.env.PORT

const app = express()
app.use(cors({ credentials: true, origin: "*" }))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
})
app.use(express.json())
app.use('/api', apiRouter) //Router API

db.authenticate().then(() => {
    console.log('Database Connected')
})

// Create Table Pelanggan
// Pelanggan.sync()

app.listen(PORT, () => console.log("Port Running " + PORT))