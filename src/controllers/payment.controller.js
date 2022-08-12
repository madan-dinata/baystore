import Payment from "../models/Payment.model.js";

// get all data Payment
export const getPayment = async (req, res) => {
    try {
        const payment = await Payment.findAll();
        res.status(200).send(payment)
    } catch (err) {
        console.log(err)
    }
}

// get data Payment by id
export const getPaymentById = async ( req, res ) => {
    try {
        const payment = await Payment.findAll({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send(payment)
    } catch (err) {
        console.log(err)
    }
}

// Create data Payment
export const createPayment = async (req,res) => {
    try {
        await Payment.create(req.body)
        res.status(200).send("Payment Created")
    } catch (err) {
        console.log(err)
    }
}

// update data Payment by id
export const updatePayment = async (req, res) => {
    try {
        await Payment.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).send("Payment Updated")
    } catch (err) {
        console.log(err)
    }
}

// delete data Payment by id
export const deletePayment = async(req, res) => {
    try {
        await Payment.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send("Payment Deleted")
    } catch (err) {
        console.log(err)
    }
}