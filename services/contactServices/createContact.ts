import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import Contact from "../../models/contactModel";
import validator from "validator";

const createContact = expressAsyncHandler(
  async (req: Request, res: Response) => {
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

    /***
     * Check if email already exists
     */
    if (await Contact.findOne({ email })) {
      throw new Error("Email already exists");
    }

    const contact = await Contact.create(req.body);

    res.json(contact);
  }
);

export default createContact;
