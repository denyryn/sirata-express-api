'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dosens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_dosen: {
        type: Sequelize.STRING
      },
      gelar_depan: {
        type: Sequelize.STRING
      },
      gelar_belakang: {
        type: Sequelize.STRING
      },
      nip: {
        type: Sequelize.STRING
      },
      nidn: {
        type: Sequelize.STRING
      },
      homebase_prodi: {
        type: Sequelize.STRING
      },
      jenjang: {
        type: Sequelize.STRING
      },
      jurusan: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('dosens');
  }
};