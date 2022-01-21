const { Category } = require("../models/models");
const ApiError = require("../error/ApiError");
const sequelize = require("../db");

class CategoryController {
  async createCategory(req, res, next) {
    try {
      let { userId, name } = req.body;
      const category = await Category.create({ userId, name });
      return res.json(category);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAllCategory(req, res) {
    const { id } = req.params;
    const category = await Category.findAll({
      where: { userId:id },
    });
    return res.json(category);
  }
}

module.exports = new CategoryController();
