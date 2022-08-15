import { Router } from "express";
import {
    getItem,
    getItemById,
    createItem,
    updateItem,
    deleteItem
} from "../controllers/item.controller.js";

const router = Router()

router.get("/", getItem)
router.get("/:id", getItemById)
router.post("/", createItem)
router.put("/:id", updateItem)
router.delete("/:id", deleteItem)

export default router