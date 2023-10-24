import express from "express";
import morgan from "morgan";

const app = express();

// settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));

export default app;