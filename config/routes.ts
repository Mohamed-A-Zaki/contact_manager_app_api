import { ErrorHandler } from "./../middlewares/errorHandler";
import contact_router from "../routes/contactRoutes";
import app from "./app";

app.use("/api/v1/contacts", contact_router);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

app.use(ErrorHandler);
