import connectToDB from "./config/connectToDB";
import startServer from "./config/startServer";

import app from "./config/app";
import "./config/config";
import contact_router from "./routes/contactRoutes";
import { ErrorHandler } from "./middlewares/errorHandler";

app.use("/api/v1/contacts", contact_router);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

app.use(ErrorHandler);

/***
 * Connect to DB
 */
connectToDB();

/**
 * Start server
 */
startServer();
