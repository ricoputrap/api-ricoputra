import { Request, Response } from "express"
import jobsData from "../data/jobs.json";

export const getJobs = (req: Request, res: Response) => {
  res.status(200).send(jobsData);
}