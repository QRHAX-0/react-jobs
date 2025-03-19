import Job from "../models/jobListing.model.js"
export const addJob = async (req, res) => {
    const { body } = req
    const newJob = await Job.create({ ...body });
    return res.json({ newJob }).status(200);
}
