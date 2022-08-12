import {Sequelize} from "sequelize";
import { db } from "../config/db.config.js";

const { DataTypes } = Sequelize

const Category = db.define("categories", {
    title: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.BLOB('long')
    }
}, {
    freezeTableName: true
})

export default Category