import express from "express";
import login from "../services/userServices/login";
import register from "../services/userServices/register";

const user_router = express.Router();

user_router.route("/login").post(login);
user_router.route("/register").post(register);

export default user_router;
