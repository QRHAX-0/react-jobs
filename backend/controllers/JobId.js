import Job from '../models/jobListing.model.js';

export const getJobById = async (req, res) => {
    const { params: { id } } = req;
    const job = await Job.findOne({ _id: id }, { __v: false });
    return res.json({ job });
}