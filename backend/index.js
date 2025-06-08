import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from "cors"
import mongoose from 'mongoose';
import { getAllJobs } from "./controllers/getAllJobs.js"
import { addJob } from "./controllers/addJob.js";
import { getJobById } from './controllers/JobId.js';
import { deleteJobId } from './controllers/deleteJobId.js';
import { editJob } from './controllers/editJob.js';

const app = express();
app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:3000', // Local development
    'http://localhost:3001', // Alternative local port
    'https://react-jobs-frontend-tan.vercel.app', // Current Vercel URL
    'https://*.vercel.app' // Allow all Vercel subdomains
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

app.get("/api/jobs", getAllJobs);
app.get("/api/jobs/:id", getJobById);
app.delete("/api/jobs/:id", deleteJobId);
app.post("/api/add-job", addJob);
app.patch("/api/jobs/:id/edit", editJob);

mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log('Connected to MongoDB')
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})