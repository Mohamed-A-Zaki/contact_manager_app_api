import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import validator from "validator";
import User from "../../models/userModel";
import bcrypt from "bcrypt";
import generateToken from "../../config/generateToken";

const login = expressAsyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  /***
   * check if name, email and password are provided
   */
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

  /**
   * check if user already exists
   */

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Email not found");
  }

  /***
   * check if password is correct
   */
  if (!(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid password");
  }

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id.toString()),
  });
});

export default login;
