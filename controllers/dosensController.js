const { dosen } = require("../models/index");

exports.getAll = async (req, res, next) => {
  try {
    const dosens = await dosen.findAll();
    res.json({ data: dosens });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createData = async (req, res) => {
  try {
    const {
      nip,
      nama_dosen,
      homebase_prodi,
      jenjang,
      jurusan,
      nidn,
      gelar_depan,
      gelar_belakang,
    } = req.body;

    // Create a new dosen record using Sequelize's create() method
    const newDosen = await dosen.create({
      nip,
      nama_dosen,
      homebase_prodi,
      jenjang,
      jurusan,
      nidn,
      gelar_depan,
      gelar_belakang,
    });

    // Respond with the newly created dosen data
    res.status(201).json({
      message: "dosen data created successfully",
      data: newDosen,
    });
  } catch (error) {
    // Handle any errors that occur during data creation
    res.status(500).json({
      error: "An error occurred while creating dosen data",
      message: error.message,
    });
  }
};

exports.getDataById = async (req, res, next) => {
  try {
    const { id } = req.params; // Assuming the ID is passed as a route parameter

    // Find the dosen record with the specified ID using Sequelize's findByPk() method
    const dosenFound = await dosen.findByPk(id);

    // If the record is found, respond with the dosen data
    if (dosenFound) {
      res.status(200).json({ data: dosenFound });
    } else {
      res.status(404).json({ error: "dosen not found" });
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

    // Find the dosen record with the specified ID using Sequelize's findByPk() method
    const dosenFound = await dosen.findByPk(id);

    // If the record is found, update its data using Sequelize's update() method
    if (dosenFound) {
      await dosen.update(updatedData);
      res.status(200).json({ message: "dosen data updated successfully" });
    } else {
      res.status(404).json({ error: "dosen not found" });
    }
  } catch (error) {
    // Handle any errors that occur during data update
    next(error);
  }
};

exports.deleteData = async (req, res, next) => {
  try {
    const { id } = req.params; // Assuming the ID is passed as a route parameter

    // Find the dosen record with the specified ID using Sequelize's findByPk() method
    const dosenFound = await dosen.findByPk(id);

    // If the record is found, delete it using Sequelize's destroy() method
    if (dosenFound) {
      await dosen.destroy();
      res.status(200).json({ message: "dosen data deleted successfully" });
    } else {
      res.status(404).json({ error: "dosen not found" });
    }
  } catch (error) {
    // Handle any errors that occur during data deletion
    next(error);
  }
};
