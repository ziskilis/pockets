const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  login: { type: DataTypes.STRING },
});

const Category = sequelize.define("category", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Transaction = sequelize.define("transaction", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  cost: { type: DataTypes.INTEGER },
  date: { type: DataTypes.DATE},
  type: { type: DataTypes.STRING},
});

const Widget = sequelize.define("widgets", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  amount: { type: DataTypes.INTEGER},
  period: { type: DataTypes.INTEGER },
});

User.hasMany(Category);
Category.belongsTo(User);

User.hasMany(Transaction);
Transaction.belongsTo(User);

User.hasMany(Widget);
Widget.belongsTo(User);

Category.hasMany(Transaction);
Transaction.belongsTo(Category);

Category.hasMany(Widget);
Widget.belongsTo(Category);

module.exports = {
  User,
  Category,
  Transaction,
  Widget,
};
