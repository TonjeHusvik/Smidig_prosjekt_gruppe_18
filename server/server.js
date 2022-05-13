import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import * as path from "path";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.static("../client/dist"));
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Started on http://localhost:${server.address().port}`);
});
