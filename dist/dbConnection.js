"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pg_1 = __importDefault(require("pg"));
const sequelize = new sequelize_1.Sequelize('postgres://default:UQWTmZ15CtYv@ep-royal-lab-313621.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require', {
    logging: false,
    dialectModule: pg_1.default,
});
/* const sequelize = new Sequelize('postgres', 'postgres', 'programmer95', {
  host: config.DB_LOCALHOST,
  dialect: 'postgres'
});

postgres://daniel:fsWxKmrDfufmqESvC3TH@kcg-crm-database.cer9bnpguytl.us-east-1.rds.amazonaws.com:5432/kcg_crm_database*/
exports.default = sequelize;
//# sourceMappingURL=dbConnection.js.map