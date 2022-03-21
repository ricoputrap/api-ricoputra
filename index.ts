import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = 3001;

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World"
  });
})

try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`)
  });
}
catch (error: any) {
  console.error(`Error: ${error.message}`)
}