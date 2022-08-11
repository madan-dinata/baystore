import {DataTypes} from "sequelize";
import { db } from "../config/db.config.js";

const User = db.define("users", {
    ID: {
        type: DataTypes.INTEGER
    },
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
})

export default User