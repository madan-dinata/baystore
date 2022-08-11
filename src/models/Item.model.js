import {DataTypes} from "sequelize";
import { db } from "../config/db.config.js";

const Item = db.define("items", {
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

export default Item