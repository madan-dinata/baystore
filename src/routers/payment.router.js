import { Router } from "express";
import {
    getPayment,
    getPaymentById,
    createPayment,
    updatePayment,
    deletePayment
} from "../controllers/payment.controller.js";

const router = Router()

router.get("/payment", getPayment)
router.get("/payment/:id", getPaymentById)
router.post("/payment", createPayment)
router.put("/payment/:id", updatePayment)
router.delete("/payment/:id", deletePayment)

export default router