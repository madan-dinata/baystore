import { Router } from "express";
import {
    getPayment,
    getPaymentById,
    createPayment,
    updatePayment,
    deletePayment
} from "../controllers/payment.controller.js";

const router = Router()

router.get("/", getPayment)
router.get("/:id", getPaymentById)
router.post("/", createPayment)
router.put("/:id", updatePayment)
router.delete("/:id", deletePayment)

export default router