'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dosen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dosen.init({
    nama_dosen: DataTypes.STRING,
    gelar_depan: DataTypes.STRING,
    gelar_belakang: DataTypes.STRING,
    nip: DataTypes.STRING,
    nidn: DataTypes.STRING,
    homebase_prodi: DataTypes.STRING,
    jenjang: DataTypes.STRING,
    jurusan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dosen',
  });
  return dosen;
};