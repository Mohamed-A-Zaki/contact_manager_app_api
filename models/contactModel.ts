import mongoose from "mongoose";

const { model, Schema } = mongoose;

interface IContact {
  user_id: mongoose.Schema.Types.ObjectId;
  name: string;
  email: string;
  phone: string;
}

const contactSchema = new Schema<IContact>(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
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
