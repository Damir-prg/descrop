const { Governance, Department } = require("../models/models");

class GovernanceController {
  async create(req, res) {
    const { name } = req.body;
    const governance = await Governance.create({ name });
    return res.json(governance);
  }

  async update(req, res) {
    const { id } = req.body;

    // all departments by governance id
    const allDepartment = await Department.findAll({
      where: {
        governanceId: id,
      },
    });
    if (allDepartment.length > 0) {
      const governance = await Governance.update(
        { departmentIds: allDepartment.map((el) => el.id) },
        { where: { id: id } }
      );
      return res.json(governance);
    }

    return res.json({})
  }

  async getAll(req, res) {
    const governances = await Governance.findAll();
    return res.json(governances);
  }
}

module.exports = new GovernanceController();
