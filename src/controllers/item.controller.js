import Item from "../models/Item.model.js";

// get all data Item
export const getItem = async (req, res) => {
    try {
        const item = await Item.findAll();
        res.status(200).send(item)
    } catch (err) {
        console.log(err)
    }
}

// get data Item by id
export const getItemById = async ( req, res ) => {
    try {
        const item = await Item.findAll({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send(item)
    } catch (err) {
        console.log(err)
    }
}

// Create data Item
export const createItem = async (req,res) => {
    try {
        await Item.create(req.body)
        res.status(200).send("Item Created")
    } catch (err) {
        console.log(err)
    }
}

// update data Item by id
export const updateItem = async (req, res) => {
    try {
        await Item.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).send("Item Updated")
    } catch (err) {
        console.log(err)
    }
}

// delete data Item by id
export const deleteItem = async(req, res) => {
    try {
        await Item.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send("Item Deleted")
    } catch (err) {
        console.log(err)
    }
}