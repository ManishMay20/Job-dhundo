import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.URI, {
      dbName: "JOB_SEEKING",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};

export default dbConnection;
