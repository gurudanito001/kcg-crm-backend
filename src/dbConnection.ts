import config from './config/config';
import { Sequelize } from "sequelize";
import pg from 'pg';



const sequelize = new Sequelize('postgres://default:UQWTmZ15CtYv@ep-royal-lab-313621.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require', {
  logging: false,
  dialectModule: pg,
})

/* const sequelize = new Sequelize('postgres', 'postgres', 'programmer95', {
  host: config.DB_LOCALHOST,
  dialect: 'postgres' 
}); 

postgres://daniel:fsWxKmrDfufmqESvC3TH@kcg-crm-database.cer9bnpguytl.us-east-1.rds.amazonaws.com:5432/kcg_crm_database*/

export default sequelize