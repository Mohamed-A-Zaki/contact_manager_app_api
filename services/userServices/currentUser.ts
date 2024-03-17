import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../../models/userModel";

const currentUser = expressAsyncHandler(
  async (_req: Request, res: Response) => {
    const user = await User.findById(res.locals.user_id);

    /**
     * check if user exists
     */
    if (!user) {
      throw new Error("User not found");
    }

    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
    });
  }
);

export default currentUser;
