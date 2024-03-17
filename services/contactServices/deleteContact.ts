import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import mongoose from "mongoose";
import Contact from "../../models/contactModel";

const deleteContact = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    /**
     * check if id is valid
     */
    if (!mongoose.isValidObjectId(id)) {
      throw new Error("Invalid contact id");
    }

    /***
     * check if contact exists
     */
    if (!(await Contact.findById(id))) {
      throw new Error("Contact not found");
    }

    /**
     * delete contact
     */
    await Contact.findByIdAndDelete(id);

    res.status(204).json();
  }
);

export default deleteContact;
