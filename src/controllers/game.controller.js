import Game from "../models/Game.model.js";

// get all data Game
export const getGame = async (req, res) => {
    try {
        const game = await Game.findAll();
        res.status(200).send(game)
    } catch (err) {
        console.log(err)
    }
}

// get data Game by id
export const getGameById = async ( req, res ) => {
    try {
        const game = await Game.findAll({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send(game)
    } catch (err) {
        console.log(err)
    }
}

// Create data Game
export const createGame = async (req,res) => {
    try {
        await Game.create(req.body)
        res.status(200).send("Game Created")
    } catch (err) {
        console.log(err)
    }
}

// update data Game by id
export const updateGame = async (req, res) => {
    try {
        await Game.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).send("Game Updated")
    } catch (err) {
        console.log(err)
    }
}

// delete data Game by id
export const deleteGame = async(req, res) => {
    try {
        await Game.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send("Game Deleted")
    } catch (err) {
        console.log(err)
    }
}