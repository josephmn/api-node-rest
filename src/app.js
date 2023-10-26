import express from "express";
import morgan from "morgan";

// Routes
import languageRoutes from "./routes/languaje.routes";

const app = express();

// settings
app.set("port", 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json()); // codigo para que entienda json

// Routes
app.use("/api/languages", languageRoutes);

export default app;