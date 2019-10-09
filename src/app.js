const morgan = require("morgan");
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import modules from "./modules";

/* Setting up the express application */
const app = express();

/* Log requests to the console */
app.use(morgan("dev"));
app.use(cors());

/* Parsing incoming request data */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* Setting up the base url for the whole application */
modules(app);

/* Catch invalid routers */
app.use("*", (req, res) =>
  res.status(404).json({
    message: "Not Found. Use /api/v1 to access the api"
  })
);

export default app;
