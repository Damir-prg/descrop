const { Governance, Department, Users } = require("../models/models");

class AutorizationController {

  async getData(req, res) {
    const data = { governance: [], department: [], logins: [] };
    const governance = await Governance.findAll();

    const users = await Users.findAll()
    data.logins.push(...users.map(el => el.login))
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
          departments: departments.map((el) => {return {name: el.name, id: el.id}}),
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
