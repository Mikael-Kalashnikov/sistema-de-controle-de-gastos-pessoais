import express from "express";
import cors from "cors";
import { routes } from "./api/index.js";
import { client } from "./infra/db.js";

client.connect().then(() => {
  const app = express();
  const PORT = 3001;
  app.use(express.json());
  app.use(cors);
  app.use("/", routes);
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
});
