import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";

const getAllContacts = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.json({
      message: "get all contacts",
    });
  }
);

export default getAllContacts;
