const { Tasks } = require("../models/models");
const { Op } = require("sequelize");
class TaskController {
  async create(req, res) {
    const {
      type,
      title,
      description,
      timeToEnd,
      taskManagerId,
      taskExecuterIds,
      commandId,
    } = req.body;

    if (
      type &&
      title &&
      description &&
      timeToEnd &&
      taskManagerId &&
      taskExecuterIds
    ) {
      const task = await Tasks.create({
        type,
        title,
        description,
        timeToEnd,
        taskManagerId,
        taskExecuterIds,
        commandId: commandId ? commandId : null,
      });
      return res.json(task);
    }
  }

  async getAll(req, res) {
    const tasks = await Tasks.findAll();
    return res.json(tasks);
  }

  async getOne(req, res) {
    const { id } = req.body;
    const task = await Tasks.findOne({ where: { id: id } });
    return res.json(task);
  }

  async getByUserId(req, res) {
    const { userId } = req.body;
    const tasks = await Tasks.findAll({
      where: {
        taskExecuterIds: {
          [Op.contains]: [userId],
        },
      },
    });
    return res.json(tasks);
  }
}

module.exports = new TaskController();
