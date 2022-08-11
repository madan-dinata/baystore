import {DataTypes} from "sequelize";
import { db } from "../config/db.config.js";

const Game = db.define("games", {
    ID: {
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.STRING
    },
    categoryID: {
        type: DataTypes.INTEGER
    },
    itemID: {
        type: DataTypes.INTEGER
    },
    paymentID: {
        type: DataTypes.INTEGER
    }

})

export default Game