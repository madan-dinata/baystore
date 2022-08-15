import { Router } from "express";
import {
    getGame,
    getGameById,
    createGame,
    updateGame,
    deleteGame
} from "../controllers/game.controller.js";

const router = Router()

router.get("/", getGame)
router.get("/:id", getGameById)
router.post("/", createGame)
router.put("/:id", updateGame)
router.delete("/:id", deleteGame)

export default router