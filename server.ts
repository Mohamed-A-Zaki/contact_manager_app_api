import connectToDB from "./config/connectToDB";
import startServer from "./config/startServer";

import "./config/config";
import app from "./config/app";
import contact_router from "./routes/contactRoutes";

app.use("/api/v1/contacts", contact_router);

/***
 * Connect to DB
 */
connectToDB();

/**
 * Start server
 */
startServer();
