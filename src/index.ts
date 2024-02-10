
import express from "express";
import indexRouter from './controllers/index'
import cors from 'cors'

const PORT = 42069;

const app = express();

app.use(cors({ origin: "*" }))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRouter)

app.listen(PORT, async () => {
    console.log("Server started in port " + PORT)
});
