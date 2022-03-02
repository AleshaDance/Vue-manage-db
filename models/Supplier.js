const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Supplier', {
    ID: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Phonenumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Supplier',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Supplier",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
