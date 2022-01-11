const Pelanggan = require('../models/PelangganModel')

exports.getPelanggan = async function (req, res) {
    try {
        const pelanggan = await Pelanggan.findAll({
            attributes: ['id_pelanggan', 'nama_pelanggan', 'nomor_telepon']
        })
        res.json(pelanggan)
    }
    catch (err) {
        console.log(err)
    }
}

exports.getPelangganById = async function (req, res) {
    try {
        const pelanggan = await Pelanggan.findAll({
            where: { id_pelanggan: req.params.id },
            attributes: ['id_pelanggan', 'nama_pelanggan', 'nomor_telepon']
        })
        res.json(pelanggan[0])
    }
    catch (err) {
        console.log(err)
    }
}

exports.postPelanggan = async function (req, res) {
    const { nama_pelanggan, nomor_telepon } = req.body
    try {
        await Pelanggan.create({
            nama_pelanggan: nama_pelanggan,
            nomor_telepon: nomor_telepon
        })
        res.status(200).json({ msg: 'Pelanggan Berhasil Di Tambah' })
    } catch (error) {
        console.log('Error : ' + error)
        res.status(500).json({ msg: 'Error : ' + error })
    }
}

exports.editPelanggan = async function (req, res) {
    const { id_pelanggan, nama_pelanggan, nomor_telepon } = req.body
    try {
        await Pelanggan.update(
            {
                nama_pelanggan: nama_pelanggan,
                nomor_telepon: nomor_telepon
            },
            {
                where: {
                    id_pelanggan: id_pelanggan
                }
            }
        )
        res.status(200).json({ msg: 'Pelanggan Berhasil di Edit' })
    } catch (error) {
        console.log('Error : ' + error)
        res.status(500).json({ msg: 'Error : ' + error })
    }
}

exports.deletePelanggan = async function (req, res) {
    const { id_pelanggan } = req.body
    try {
        await Pelanggan.destroy(
            {
                where: {
                    id_pelanggan: id_pelanggan
                }
            }
        )
        res.status(200).json({ msg: 'Pelanggan Berhasil di Hapus' })
    } catch (error) {
        console.log('Error : ' + error)
        res.status(500).json({ msg: 'Error : ' + error })
    }
}