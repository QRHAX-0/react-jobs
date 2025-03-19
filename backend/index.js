import express from 'express';
import cors from "cors"
import mongoose from 'mongoose';
// import JobsListing from './routes/JobsListing.js';
import { getAllJobs } from "./controllers/getAllJobs.js"
import { addJob } from "./controllers/addJob.js";
import { getJobById } from './controllers/JobId.js';
import { deleteJobId } from './controllers/deleteJobId.js';
import { editJob } from './controllers/editJob.js';
const app = express();
app.use(express.json());
app.use(cors())
app.get("/api/jobs", getAllJobs);
app.get("/api/jobs/:id", getJobById);
app.delete("/api/jobs/:id", deleteJobId);
app.post("/api/add-job", addJob);
app.patch("/api/jobs/:id/edit", editJob);


mongoose.connect('mongodb://localhost:27017/react-jobs').then(() => {
    console.log('Connected to MongoDB')
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})