import { Router } from "express";
import {
    getCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
} from "../controllers/category.controller.js";

const router = Router()

router.get("/", getCategory)
router.get("/:id", getCategoryById)
router.post("/", createCategory)
router.put("/:id", updateCategory)
router.delete("/:id", deleteCategory)

export default router