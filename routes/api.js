const express = require('express')
const router = express.Router()

const pelangganController = require('../controllers/Pelanggan')

//GET Method
router.get('/list_pelanggan', pelangganController.getPelanggan)
router.get('/data_pelanggan/:id', pelangganController.getPelangganById)

//POST Method
router.post('/add_pelanggan', pelangganController.postPelanggan)
router.post('/delete_pelanggan', pelangganController.deletePelanggan)

//PUT Method
router.put('/edit_pelanggan', pelangganController.editPelanggan)


module.exports = router