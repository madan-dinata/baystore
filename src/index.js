import express from "express";
import bodyParser from "body-parser"
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";
import path from "path";

import { PORT } from "./config/config.js"
import categoryRouter from "./routers/category.router.js"

const app = express()
const __dirname = path.resolve("src")
const api = "/api/v1"

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(logger("dev"))

app.use(api, categoryRouter)

app.get("/", (req, res) => {
    res.render("pages/index", { title: "Home Page" });
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`)
})