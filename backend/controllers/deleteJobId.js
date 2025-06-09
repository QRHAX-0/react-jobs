import Job from "../models/jobListing.model.js"

export const deleteJobId = async (req, res) => {
    if (process.env.READ_ONLY_MODE === 'true') {
        return res.status(403).json({ message: 'Adding jobs is disabled in read-only mode.' });
    }
    const { id } = req.params
    await Job.deleteOne({ _id: id })
    return res.sendStatus(204)
}