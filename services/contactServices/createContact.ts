import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";

const createContact = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.json({
      message: "create contact",
    });
  }
);

export default createContact;
