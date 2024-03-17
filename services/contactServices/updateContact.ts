import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";

const updateContact = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.json({
      message: `update contact ${req.params.id}`,
    });
  }
);

export default updateContact;
