const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/dbconfig");
connectDB();

app.use(express.json());
const usersRoute = require("./routes/usersRoute");

app.use("./api/users", usersRoute);
const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
