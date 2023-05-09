const { Users, Command } = require("../models/models");
const {Op}                 = require("sequelize")

class UserController {
  async create(req, res) {
    const { login, initials, password, governance, department } = req.body;
    if (login && initials && password && governance && department) {
      const user = await Users.create({
        login,
        initials,
        password,
        governance,
        department,
      });
      return res.json(user);
    } else res.json(null);
  }

  async getAll(req, res) {
    const users = await Users.findAll();
    return res.json(users);
  }

  async getOne(req, res) {
    const { id } = req.body;
    const user = await Users.findOne({
      where: {
        id: id,
      },
    });

    return res.json(user);
  }

  async login(req, res) {
    const { login, password } = req.body;
    const user = await Users.findOne({
      where: {
        login: login,
        password: password,
      },
    });
    if (user) {
      return res.json({ result: true, userId: user.id });
    } else {
      return res.json({ result: false, userId: -1 });
    }
  }

  async updateInfo(req, res) {
    const { id, initials, governance, department, jobTitle, phone } = req.body;

    if (id && initials && governance && department && jobTitle && phone) {
      const commands = await Command.findAll({
        where: {
          userIds: {
            [Op.contains]: [id]
          },
        },
      });
      const user = await Users.update(
        {
          initials: initials,
          governance: governance,
          department: department,
          jobTitle: jobTitle,
          commandName: commands.map((el) => el.name).join(","),
          phone: phone,
          commandId: commands.map((el) => el.id).join(","),
        },
        { where: { id: id } }
      );
      console.log(
        initials,
        governance,
        department,
        jobTitle,
        commands.map((el) => el.name).join(","),
        phone,
        commands.map((el) => el.id).join(",")
      );
      return res.json(user);
    } else {
      res.json(null);
    }
  }
}

module.exports = new UserController();
