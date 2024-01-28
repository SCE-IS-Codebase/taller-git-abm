import express from "express";

import bodyParser from "body-parser";

import cors from "cors";

import router from "./api/routes.js";

const app = express();

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use("/api", router);

app.listen(8000, () => {
    console.log("Server is running on port 8000.");
});

