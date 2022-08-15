import User from "../models/User.model.js"

// get all data User
export const getUser = async (req, res) => {
    try {
        const user = await User.findAll();
        res.status(200).send(user)
    } catch (err) {
        console.log(err)
    }
}

// get data User by id
export const getUserById = async ( req, res ) => {
    try {
        const user = await User.findAll({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send(user)
    } catch (err) {
        console.log(err)
    }
}

// Create data User
export const createUser = async (req,res) => {
    try {
        await User.create(req.body)
        res.status(200).send("User Created")
    } catch (err) {
        console.log(err)
    }
}

// update data User by id
export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).send("User Updated")
    } catch (err) {
        console.log(err)
    }
}

// delete data User by id
export const deleteUser = async(req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send("User Deleted")
    } catch (err) {
        console.log(err)
    }
}