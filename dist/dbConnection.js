"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('postgres://daniel:fsWxKmrDfufmqESvC3TH@localhost:5433/kcg_crm', { logging: false });
/* const sequelize = new Sequelize('postgres', 'postgres', 'programmer95', {
  host: config.DB_LOCALHOST,
  dialect: 'postgres'
}); */
exports.default = sequelize;
//# sourceMappingURL=dbConnection.js.map