const sequelize = require("../dbConnect");
const { DataTypes } = require("sequelize");

// Модели таблиц БД

const Users = sequelize.define("users", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  login: { type: DataTypes.STRING, unique: true },
  initials: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  governance: { type: DataTypes.STRING },
  department: { type: DataTypes.STRING },
  jobTitle: { type: DataTypes.STRING, defaultValue: "Специалист" },
  efficiency: { type: DataTypes.INTEGER, defaultValue: 0 },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  activeProjects: { type: DataTypes.INTEGER, defaultValue: 0 },
  commandName: { type: DataTypes.STRING, defaultValue: null },
  phone: { type: DataTypes.STRING, unique: true, defaultValue: null },
  commandId: { type: DataTypes.INTEGER, defaultValue: null },
  speed: {type: DataTypes.INTEGER, defaultValue: 3},
  quality: {type: DataTypes.INTEGER, defaultValue: 3},
  understanding: {type: DataTypes.INTEGER, defaultValue: 3},
  sociability: {type: DataTypes.INTEGER, defaultValue: 3},
  knowledge: {type: DataTypes.INTEGER, defaultValue: 3},
});

const Tasks = sequelize.define("tasks", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
  title: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  timeToEnd: { type: DataTypes.INTEGER },
  taskManagerId: { type: DataTypes.INTEGER, defaultValue: null },
  taskExecuterIds: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    defaultValue: [],
  },
  commandId: { type: DataTypes.INTEGER },
});

const Command = sequelize.define("command", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  departmentId: {type: DataTypes.INTEGER},
  managerUserId: { type: DataTypes.INTEGER },
  userIds: { type: DataTypes.ARRAY(DataTypes.INTEGER), defaultValue: [] },
  taskIds: { type: DataTypes.ARRAY(DataTypes.INTEGER), defaultValue: [] },
});

const Department = sequelize.define("department", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  governanceId: {type: DataTypes.INTEGER},
  name: { type: DataTypes.STRING },
  commandIds: { type: DataTypes.ARRAY(DataTypes.INTEGER), defaultValue: [] },
});

const Governance = sequelize.define("governance", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  departmentIds: { type: DataTypes.ARRAY(DataTypes.INTEGER), defaultValue: [] },
});

module.exports = {
  Users,
  Tasks,
  Command,
  Governance,
  Department,
};
