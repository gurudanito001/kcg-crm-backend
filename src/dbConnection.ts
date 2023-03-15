import config from './config/config';
import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres://daniel:fsWxKmrDfufmqESvC3TH@localhost:5433/kcg_crm', {logging: false})

/* const sequelize = new Sequelize('postgres', 'postgres', 'programmer95', {
  host: config.DB_LOCALHOST,
  dialect: 'postgres' 
}); */

export default sequelize