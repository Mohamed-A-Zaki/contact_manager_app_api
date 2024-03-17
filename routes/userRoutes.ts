import express from "express";
import login from "../services/userServices/login";
import register from "../services/userServices/register";
import currentUser from "../services/userServices/currentUser";
import requireAuth from "../middlewares/requireAuth";

const user_router = express.Router();

user_router.route("/login").post(login);
user_router.route("/register").post(register);
user_router.route("/current").get(requireAuth, currentUser);

export default user_router;
