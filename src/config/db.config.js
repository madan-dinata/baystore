import dotenv from "dotenv"
dotenv.config();
import {Sequelize} from "sequelize";

const db = new Sequelize ('baystore', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export { db }