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

    const contact = await Contact.create({
      user_id: res.locals.user_id,
      ...req.body,
    });

    res.json(contact);
  }
);

export default createContact;
