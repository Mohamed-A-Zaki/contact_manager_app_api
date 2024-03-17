import express from "express";

import getAllContacts from "../services/contactServices/getAllContacts";
import createContact from "../services/contactServices/createContact";
import getOneContact from "../services/contactServices/getOneContact";
import deleteContact from "../services/contactServices/deleteContact";
import updateContact from "../services/contactServices/updateContact";
import requireAuth from "../middlewares/requireAuth";

const contact_router = express.Router();

contact_router.use(requireAuth);

contact_router.route("/").get(getAllContacts).post(createContact);

contact_router
  .route("/:id")
  .get(getOneContact)
  .put(updateContact)
  .delete(deleteContact);

export default contact_router;
