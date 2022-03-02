var DataTypes = require("sequelize").DataTypes;
var _Client = require("./Client");
var _Delivery = require("./Delivery");
var _Order = require("./Order");
var _Product = require("./Product");
var _ProductType = require("./ProductType");
var _Supplier = require("./Supplier");

function initModels(sequelize) {
  var Client = _Client(sequelize, DataTypes);
  var Delivery = _Delivery(sequelize, DataTypes);
  var Order = _Order(sequelize, DataTypes);
  var Product = _Product(sequelize, DataTypes);
  var ProductType = _ProductType(sequelize, DataTypes);
  var Supplier = _Supplier(sequelize, DataTypes);

  Order.belongsTo(Client, { as: "Client", foreignKey: "ClientID"});
  Client.hasMany(Order, { as: "Orders", foreignKey: "ClientID"});
  Order.belongsTo(Delivery, { as: "Delivery", foreignKey: "DeliveryID"});
  Delivery.hasMany(Order, { as: "Orders", foreignKey: "DeliveryID"});
  Order.belongsTo(Product, { as: "Product", foreignKey: "ProductID"});
  Product.hasMany(Order, { as: "Orders", foreignKey: "ProductID"});
  Product.belongsTo(ProductType, { as: "ProductType", foreignKey: "ProductTypeID"});
  ProductType.hasMany(Product, { as: "Products", foreignKey: "ProductTypeID"});
  Product.belongsTo(Supplier, { as: "Supplier", foreignKey: "SupplierID"});
  Supplier.hasMany(Product, { as: "Products", foreignKey: "SupplierID"});

  return {
    Client,
    Delivery,
    Order,
    Product,
    ProductType,
    Supplier,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
