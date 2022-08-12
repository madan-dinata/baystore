import {Sequelize} from "sequelize";
import { db } from "../config/db.config.js";

const { DataTypes } = Sequelize

const Item = db.define("items", {
    title: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.BLOB('long')
    }
}, {
    freezeTableName: true
})

export default Item