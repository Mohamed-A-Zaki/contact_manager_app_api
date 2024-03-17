import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import Contact from "../../models/contactModel";

const getAllContacts = expressAsyncHandler(
  async (_req: Request, res: Response) => {
    const contacts = await Contact.find({ user_id: res.locals.user_id });
    res.json(contacts);
  }
);

export default getAllContacts;
