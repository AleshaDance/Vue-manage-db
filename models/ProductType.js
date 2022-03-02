const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductType', {
    ID: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    Category: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ProductType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ProductType",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
