const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product', {
    ID: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SupplierID: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Supplier',
        key: 'ID'
      }
    },
    ProductTypeID: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'ProductType',
        key: 'ID'
      }
    },
    Measure: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Product',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Product",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
