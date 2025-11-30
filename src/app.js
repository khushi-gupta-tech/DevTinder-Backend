require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const cors = require("cors");

const cookieParser = require("cookie-parser");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");
const paymentRouter = require("./routes/payment")

app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/request", requestRouter);
app.use("/api/user", userRouter);
app.use("/api/payment", paymentRouter);


connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(process.env.PORT, "0.0.0.0", () => {
      console.log("Server is successfully listening on port 3000");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!");
  });
