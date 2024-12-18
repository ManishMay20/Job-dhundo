import app from "./app.js";
import { config } from "dotenv";
import dbConnection from "./database/dbConnection.js";

config({ path: ".env" });
const PORT = process.env.PORT;
dbConnection();
app.listen(PORT, () => {
  console.log("server is running on Port : ", PORT);
});
