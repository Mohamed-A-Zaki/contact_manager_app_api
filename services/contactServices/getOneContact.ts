import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import mongoose from "mongoose";
import Contact from "../../models/contactModel";

const getOneContact = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    /**
     * check if id is valid
     */
    if (!mongoose.isValidObjectId(id)) {
      throw new Error("Invalid contact id");
    }

    const contact = await Contact.findById(id);

    /**
     * check if contact belongs to user
     */
    if (contact?.user_id !== res.locals.user_id) {
      throw new Error("Contact not found");
    }

    /**
     * check if contact exists
     */
    if (!contact) {
      throw new Error("Contact not found");
    }

    res.json(contact);
  }
);

export default getOneContact;
