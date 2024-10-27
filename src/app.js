import express from "express";
import rateLimit from 'express-rate-limit';

const app = express();
const PORT = 3000;

// Define a rate limit (e.g., 100 requests per 15 minutes per IP)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    message: ['Too many requests from this IP, please try again later.']
});

app.use(limiter);
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));



//routes 
import quoteRouter from "./routes/quote-api.routes.js";

app.use("/api", quoteRouter)



app.get('/', (req, res) => {

    res.json(['Hello, world! This is a rate-limited API.']);
});




export { app }