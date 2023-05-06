const {Department}            = require('../models/models');

class DepartmentController {
  async create (req, res) {
    const {name, governanceId} = req.body;
    const department = await Department.create({name, governanceId});
    return res.json(department);
  }

  async getAll (req, res) {
    const departments = await Department.findAll();
    return res.json(departments);
  }
}

module.exports = new DepartmentController();