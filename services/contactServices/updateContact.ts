import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import mongoose from "mongoose";
import Contact from "../../models/contactModel";
import validator from "validator";

const updateContact = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    /**
     * check if name, email and phone are provided
     */
    if (!name) {
      throw new Error("Name is required");
    }

    if (!email) {
      throw new Error("Email is required");
    }

    if (!phone) {
      throw new Error("Phone is required");
    }

    /***
     * Validate email and phone
     */
    if (!validator.isEmail(email)) {
      throw new Error("Invalid email");
    }

    if (!validator.isMobilePhone(phone, "ar-EG")) {
      throw new Error("Invalid phone number");
    }

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

    const contact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.json(contact);
  }
);

export default updateContact;
