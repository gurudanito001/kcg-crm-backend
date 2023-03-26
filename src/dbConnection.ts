import config from './config/config';
import { Sequelize } from "sequelize";
import pg from 'pg';



const sequelize = new Sequelize('postgres://daniel:fsWxKmrDfufmqESvC3TH@kcg-crm-database.cer9bnpguytl.us-east-1.rds.amazonaws.com:5432/kcg_crm_database', {
  logging: false,
  dialectModule: pg,
})

/* const sequelize = new Sequelize('postgres', 'postgres', 'programmer95', {
  host: config.DB_LOCALHOST,
  dialect: 'postgres' 
}); */

export default sequelize