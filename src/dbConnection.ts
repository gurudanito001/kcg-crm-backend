import config from './config/config';
import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres://daniel:fsWxKmrDfufmqESvC3TH@kcg-crm-database.cer9bnpguytl.us-east-1.rds.amazonaws.com:5432/kcg_crm_database', {logging: false})

/* const sequelize = new Sequelize('postgres', 'postgres', 'programmer95', {
  host: config.DB_LOCALHOST,
  dialect: 'postgres' 
}); */

export default sequelize