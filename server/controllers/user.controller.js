const { Users } = require("../models/models");

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
    } else res.json(null)
  }

  async getAll(req, res) {
    const users = await Users.findAll();
    return res.json(users)
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
      return res.json({result: true});
    } else {
      return res.json({result: false});
    }

  }
}

module.exports = new UserController();
