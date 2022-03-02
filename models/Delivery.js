const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Delivery', {
    ID: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Phonenumber: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Delivery',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Delivery",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
