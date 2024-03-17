import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";

const deleteContact = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.json({
      message: `delete contact ${req.params.id}`,
    });
  }
);

export default deleteContact;
