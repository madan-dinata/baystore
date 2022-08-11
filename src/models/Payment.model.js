import {DataTypes} from "sequelize";
import { db } from "../config/db.config.js";

const Payment = db.define("Payments", {
    ID: {
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.STRING
    }
})

export default Payment