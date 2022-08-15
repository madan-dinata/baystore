import { Router } from "express";
const router = Router()
import categoryRouter from "./category.router.js"
import itemRouter from "./item.router.js"
import paymentRouter from "./payment.router.js"
import gameRouter from "./game.router.js"
import userRouter from "./user.router.js"

router.use("/category", categoryRouter)
router.use("/item", itemRouter)
router.use("/payment", paymentRouter)
router.use("/game", gameRouter);
router.use("/user", userRouter)

export default router