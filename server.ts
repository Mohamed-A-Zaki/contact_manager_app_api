import connectToDB from "./config/connectToDB";
import startServer from "./config/startServer";

import "./config/config";
import "./config/routes";

/***
 * Connect to DB
 */
connectToDB();

/**
 * Start server
 */
startServer();
