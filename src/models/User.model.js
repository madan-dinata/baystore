import {Sequelize} from "sequelize";
import { db } from "../config/db.config.js";

const { DataTypes } = Sequelize

const User = db.define("users", {
    fullname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
})

export default User