import { Router } from "express";
import {
    getGame,
    getGameById,
    createGame,
    updateGame,
    deleteGame
} from "../controllers/game.controller.js";

const router = Router()

router.get("/game", getGame)
router.get("/game/:id", getGameById)
router.post("/game", createGame)
router.put("/game/:id", updateGame)
router.delete("/game/:id", deleteGame)

export default router