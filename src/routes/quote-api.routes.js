import { Router } from "express";
import { quoteById, randomQuote } from "../controllers/quote.controllers.js";

const router = Router()

router.route("/random").get(randomQuote)
router.route("/quote/:id").get(quoteById)

export default router