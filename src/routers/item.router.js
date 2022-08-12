import { Router } from "express";
import {
    getItem,
    getItemById,
    createItem,
    updateItem,
    deleteItem
} from "../controllers/item.controller.js";

const router = Router()

router.get("/item", getItem)
router.get("/item/:id", getItemById)
router.post("/item", createItem)
router.put("/item/:id", updateItem)
router.delete("/item/:id", deleteItem)

export default router