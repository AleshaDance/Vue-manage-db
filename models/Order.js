const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Order', {
    ID: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    ClientID: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Client',
        key: 'ID'
      }
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ProductID: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Product',
        key: 'ID'
      }
    },
    DeliveryID: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Delivery',
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 'Order',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Order",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
