"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pg_1 = __importDefault(require("pg"));
const sequelize = new sequelize_1.Sequelize('postgres://daniel:fsWxKmrDfufmqESvC3TH@kcg-crm-database.cer9bnpguytl.us-east-1.rds.amazonaws.com:5432/kcg_crm_database', {
    logging: false,
    dialectModule: pg_1.default,
});
/* const sequelize = new Sequelize('postgres', 'postgres', 'programmer95', {
  host: config.DB_LOCALHOST,
  dialect: 'postgres'
}); */
exports.default = sequelize;
//# sourceMappingURL=dbConnection.js.map