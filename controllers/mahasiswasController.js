const { mahasiswa } = require("../models/index");

exports.getAll = async (req, res, next) => {
  try {
    const mahasiswas = await mahasiswa.findAll();
    res.json({ data: mahasiswas });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createData = async (req, res) => {
  try {
    const {
      nim,
      nama,
      program_studi,
      jenjang,
      jurusan,
      jenis_kelamin,
      email,
      status,
      nip_dosen_wali,
      nama_dosen_wali,
    } = req.body;

    // Create a new mahasiswa record using Sequelize's create() method
    const newMahasiswa = await mahasiswa.create({
      nim,
      nama,
      program_studi,
      jenjang,
      jurusan,
      jenis_kelamin,
      email,
      status,
      nip_dosen_wali,
      nama_dosen_wali,
    });

    // Respond with the newly created mahasiswa data
    res.status(201).json({
      message: "mahasiswa data created successfully",
      data: newMahasiswa,
    });
  } catch (error) {
    // Handle any errors that occur during data creation
    res.status(500).json({
      error: "An error occurred while creating mahasiswa data",
      message: error.message,
    });
  }
};

exports.getDataById = async (req, res, next) => {
  try {
    const { id } = req.params; // Assuming the ID is passed as a route parameter

    // Find the mahasiswa record with the specified ID using Sequelize's findByPk() method
    const mahasiswaFound = await mahasiswa.findByPk(id);

    // If the record is found, respond with the mahasiswa data
    if (mahasiswaFound) {
      res.status(200).json({ data: mahasiswaFound });
    } else {
      res.status(404).json({ error: "mahasiswa not found" });
    }
  } catch (error) {
    // Handle any errors that occur during data retrieval
    next(error);
  }
};

exports.updateData = async (req, res, next) => {
  try {
    const { id } = req.params; // Assuming the ID is passed as a route parameter
    const updatedData = req.body; // Assuming the updated data is sent in the request body

    // Find the mahasiswa record with the specified ID using Sequelize's findByPk() method
    const mahasiswaFound = await mahasiswa.findByPk(id);

    // If the record is found, update its data using Sequelize's update() method
    if (mahasiswaFound) {
      await mahasiswa.update(updatedData);
      res.status(200).json({ message: "mahasiswa data updated successfully" });
    } else {
      res.status(404).json({ error: "mahasiswa not found" });
    }
  } catch (error) {
    // Handle any errors that occur during data update
    next(error);
  }
};

exports.deleteData = async (req, res, next) => {
  try {
    const { id } = req.params; // Assuming the ID is passed as a route parameter

    // Find the mahasiswa record with the specified ID using Sequelize's findByPk() method
    const mahasiswaFound = await mahasiswa.findByPk(id);

    // If the record is found, delete it using Sequelize's destroy() method
    if (mahasiswaFound) {
      await mahasiswa.destroy();
      res.status(200).json({ message: "mahasiswa data deleted successfully" });
    } else {
      res.status(404).json({ error: "mahasiswa not found" });
    }
  } catch (error) {
    // Handle any errors that occur during data deletion
    next(error);
  }
};
