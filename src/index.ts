import express, { Request, Response } from "express";

import incomingRoutes from "./routes/incoming"

const app = express();
const PORT = process.env.PORT || 7777;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Node.js + TypeScript API!");
});


app.use("/api", incomingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});