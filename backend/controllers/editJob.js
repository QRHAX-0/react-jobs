import Job from "../models/jobListing.model.js"

export const editJob = async (req, res) => {
    if (process.env.READ_ONLY_MODE === 'true') {
        return res.status(403).json({ message: 'Adding jobs is disabled in read-only mode.' });
    }
    const { params: { id } } = req
    const { body } = req;
    await Job.updateOne({ _id: id }, { $set: { ...body } })
    res.sendStatus(200)
}