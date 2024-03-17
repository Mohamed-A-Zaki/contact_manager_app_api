import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import app from "./app";
import { ErrorHandler } from "../middlewares/errorHandler";

dotenv.config();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(ErrorHandler);
