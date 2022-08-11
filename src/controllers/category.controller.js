// import category db
import Category from "../models/Category.model.js";

// get all data category
export const getCategory = async (req, res) => {
    try {
        const category = await Category.findAll();
        res.status(200).send(category)
    } catch (err) {
        console.log(err)
    }
}

// get data category by id
export const getCategoryById = async ( req, res ) => {
    try {
        const category = await Category.findAll({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send(category)
    } catch (err) {
        console.log(err)
    }
}

// Create data category
export const createCategory = async (req,res) => {
    try {
        await Category.create(req.body)
        res.status(200).send("Category Created")
    } catch (err) {
        console.log(err)
    }
}

// update data category by id
export const updateCategory = async (req, res) => {
    try {
        await Category.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).send("Category Updated")
    } catch (err) {
        console.log(err)
    }
}

// delete data category by id
export const deleteCategory = async(req, res) => {
    try {
        await Category.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send("Category Deleted")
    } catch (err) {
        console.log(err)
    }
}