import express, { Application, Request, Response } from "express";
import jobsRoutes from "./routes/jobs";

const app: Application = express();
const PORT = 3001;

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/jobs", jobsRoutes);

try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`)
  });
}
catch (error: any) {
  console.error(`Error: ${error.message}`)
}