import dotenv from "dotenv";
import express from "express";
import path from "path";
import * as sessionAuth from "./middleware/sessionAuth";
import * as routes from "./routes";

// initialize configuration
dotenv.config();

const port = process.env.SERVER_PORT;
const app = express();

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Configure session auth
sessionAuth.register(app);

// Configure routes (dependent on sessionAuth registration)
routes.register(app);

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
