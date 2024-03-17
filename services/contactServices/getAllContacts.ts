import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import Contact from "../../models/contactModel";

const getAllContacts = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const contacts = await Contact.find({});
    res.json(contacts);
  }
);

export default getAllContacts;
