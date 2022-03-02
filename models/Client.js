const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Client', {
    ID: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    Fullname: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Country: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Phonenumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Client',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Client",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
