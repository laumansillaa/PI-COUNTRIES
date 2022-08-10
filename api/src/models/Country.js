const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    name: {
      type: DataTypes.STRING ,
      allowNull: false,
    },
    
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    capital: {
      type: DataTypes.STRING,
      
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING,
      
    },
    area: {
      type: DataTypes.INTEGER,
      
    },
    population: {
      type: DataTypes.INTEGER,
      
    },
    flags: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
};


