import Jobs from "../models/jobListing.model.js"
export const getAllJobs = async (req, res) => {
    const { query } = req;
    const limit = query.limit;
    const jobs = !limit ? await Jobs.find({}, { __v: false }) : await Jobs.find({}, { __v: false }).limit(limit)
    return res.json({ jobs});
}

