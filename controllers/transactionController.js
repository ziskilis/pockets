const { Transaction, Category } = require("../models/models");
const ApiError = require("../error/ApiError");
const sequelize = require("../db");

class TransactionController {
  async createTransaction(req, res, next) {
    try {
      let { userId, cost, date, type, category } = req.body;
      let categoryId =  await Category.findOne({attributes: ['id'], where:{name:category}})
      const {id} = await Transaction.create({ userId, cost, date, type, categoryId:categoryId.id});
      const transaction = await Transaction.findOne({include: Category,
        where: { id },
      });
      return res.json(transaction);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async deleteTransaction(req, res) {
    const { id } = req.params;
    const transactions = await Transaction.destroy({
      where: { id },
    });
    return res.json(transactions);
  }

  async getAll(req, res) {
    const { id } = req.params;
    const transactions = await Transaction.findAll({include: Category,
      where: { userId:id },
    });
    return res.json(transactions);
  }
}

module.exports = new TransactionController();
