const { Governance, Department } = require("../models/models");

class AutorizationController {

  async getData(req, res) {
    const data = { governance: [], department: [] };
    const governance = await Governance.findAll();
    for (let i = 0; i < governance.length; i++) {
      const departments = await Department.findAll({
        where: {
          governanceId: governance[i].id,
        },
      });

      data.governance.push({
        key: governance[i].id,
        title: governance[i].name,
      });
      if (departments.length > 0) {
        data.department.push({
          governanceKey: governance[i].id,
          departments: departments.map((el) => el.name),
        });
      } else {
        data.department.push({
          governanceKey: governance[i].id,
          departments: [],
        })
      }
    }

    return res.json(data);
  }
}

module.exports = new AutorizationController();
