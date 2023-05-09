const { Command, Department } = require("../models/models");

class CommandController {
  async create(req, res) {
    const { name, description, departmentId, managerUserId, userIds } =
      req.body;
    if (name && description && departmentId && managerUserId && userIds) {
      const command = await Command.create({
        name,
        description,
        departmentId,
        managerUserId,
        userIds,
      });
      const department = await Department.findOne({
        where: { id: departmentId },
      });
      await Department.update(
        { commandIds: [...department.commandIds, command.id] },
        { where: { id: departmentId } }
      );
      return res.json(command);
    } else res.json(null);
  }

  async update(req, res) {
    const { userIds, taskIds, commandId } = req.body;

    if (userIds && taskIds && commandId) {
      const updatedCommand = await Command.update(
        {
          userIds: [...userIds],
          taskIds: [...taskIds],
        },
        { where: { id: commandId } }
      );
      return res.json(updatedCommand);
    } else return res.json(req.body);
  }

  async getAll(req, res) {
    const commands = await Command.findAll();
    return res.json(commands);
  }

  async getOne(req, res) {
    const { commandId } = req.body;
    const command = await Command.findOne({ where: { id: commandId } });
    return res.json(command);
  }
}

module.exports = new CommandController();
