import {Sequelize} from "sequelize";
import { db } from "../config/db.config.js";

const { DataTypes } = Sequelize

const Payment = db.define("payments", {
    title: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.BLOB('long')
    }
}, {
    freezeTableName: true
})

export default Payment