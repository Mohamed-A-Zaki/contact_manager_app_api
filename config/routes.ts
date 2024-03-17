import app from "./app";

import user_router from "../routes/userRoutes";
import contact_router from "../routes/contactRoutes";

import { ErrorHandler } from "./../middlewares/errorHandler";

app.use("/api/v1/users", user_router);
app.use("/api/v1/contacts", contact_router);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

app.use(ErrorHandler);
