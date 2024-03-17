import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import validator from "validator";
import User from "../../models/userModel";
import bcrypt from "bcrypt";
import generateToken from "../../config/generateToken";

const register = expressAsyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  /***
   * check if name, email and password are provided
   */
  if (!name) {
    throw new Error("Name is required");
  }

  if (!email) {
    throw new Error("Email is required");
  }

  if (!password) {
    throw new Error("Password is required");
  }

  /***
   * Validate email and password
   */
  if (!validator.isEmail(email)) {
    throw new Error("Invalid email");
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not strong enough");
  }

  /**
   * check if user already exists
   */
  if (await User.findOne({ email })) {
    throw new Error("User already exists");
  }

  /**
   * hash password
   */
  const hashed_password = await bcrypt.hash(password, 10);

  /***
   * create user
   */
  const user = await User.create({
    name,
    email,
    password: hashed_password,
  });

  res.json({
    token: generateToken(user._id.toString()),
  });
});

export default register;
