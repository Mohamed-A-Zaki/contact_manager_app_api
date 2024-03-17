import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";

const getOneContact = expressAsyncHandler(
  async (req: Request, res: Response) => {
    res.json({
      message: `get contact ${req.params.id}`,
    });
  }
);

export default getOneContact;
