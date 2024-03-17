import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import app from "./app";

dotenv.config();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
