import mongoose from "mongoose";

const { model, Schema } = mongoose;

interface IContact {
  name: string;
  email: string;
  phone: string;
}

const contactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = model<IContact>("Contact", contactSchema);

export default Contact;
