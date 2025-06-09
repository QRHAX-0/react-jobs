import Job from "../models/jobListing.model.js"

export const addJob = async (req, res) => {
    if (process.env.READ_ONLY_MODE === 'true') {
        return res.status(403).json({ message: 'Adding jobs is disabled in read-only mode.' });
    }
    const { body } = req
    const newJob = await Job.create({ ...body });
    return res.json({ newJob }).status(200);
}
