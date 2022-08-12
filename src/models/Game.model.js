import {Sequelize} from "sequelize";
import { db } from "../config/db.config.js";

const { DataTypes } = Sequelize

const Game = db.define("games", {
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.BLOB('long')
    },
    categoryID: {
        type: DataTypes.INTEGER,
        references: 'categories', // <<< Note, its table's name, not object name
        referencesKey: 'id' // <<< Note, its a column name
    },
    itemID: {
        type: DataTypes.INTEGER,
        references: 'items', // <<< Note, its table's name, not object name
        referencesKey: 'id' // <<< Note, its a column name
    },
    paymentID: {
        type: DataTypes.INTEGER,
        references: 'payments', // <<< Note, its table's name, not object name
        referencesKey: 'id' // <<< Note, its a column name
    }

})

export default Game