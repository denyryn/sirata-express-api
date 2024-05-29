// Import necessary modules
const axios = require("axios");
const env = require("dotenv").config();
const { mahasiswa } = require("../models/index");
const { mapKeys } = require("lodash");

// Controller function to insert data from external API
exports.index = async (req, res, next) => {
  try {
    // Check if required environment variables are present
    if (!process.env.MAHASISWA_API_URL || !process.env.API_TOKEN) {
      return res
        .status(400)
        .json({ error: "Missing required environment variables" });
    }

    const {
      url = process.env.MAHASISWA_API_URL,
      apiKey = process.env.API_TOKEN,
    } = req.body;

    // Make a GET request to the external API using Axios
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });

    // Assuming the API response contains an array of data objects
    const responseData = response.data;

    const dataToInsert = responseData.data.map((obj) =>
      mapKeys(obj, (_, key) => key.toLowerCase())
    );

    if (!Array.isArray(dataToInsert) || dataToInsert.length === 0) {
      return res.status(400).json({ error: "No valid data received from API" });
    }

    // Insert data into your database using Sequelize's bulkCreate() method
    await mahasiswa.bulkCreate(dataToInsert);

    res.status(201).json({ message: "Data inserted successfully from API" });
  } catch (error) {
    // Handle any errors that occur during API request or data insertion
    console.error("Error inserting data from API:", error);
    res
      .status(500)
      .json({ error: "An error occurred while inserting data from API" });
  }
};
