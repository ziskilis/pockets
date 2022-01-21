const { Widget, Category } = require("../models/models");
const ApiError = require("../error/ApiError");
const sequelize = require("../db");

class WidgetController {
  async createWidget(req, res, next) {
    try {
      let { userId, amount, period, categoryId} = req.body;
      const {id} = await Widget.create({ userId, amount, period, categoryId});
      const widget = await Widget.findOne({include: Category,
        where: { id },
      });
      return res.json(widget);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async deleteWidget(req, res) {
    const { id } = req.params;
    const widgets = await Widget.destroy({
      where: { id },
    });
    return res.json(widgets);
  }

  async getAllWidgets(req, res) {
    const { id } = req.params;
    const widgets = await Widget.findAll({include: Category,
      where: { userId: id },
    });
    return res.json(widgets);
  }
}

module.exports = new WidgetController();
