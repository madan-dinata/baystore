import {DataTypes} from "sequelize";
import { db } from "../config/db.config.js";

const Category = db.define("categories", {
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

export default Category