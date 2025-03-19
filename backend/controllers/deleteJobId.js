import Job from "../models/jobListing.model.js"

export const deleteJobId = async (req, res) => {
    const { id } = req.params
    await Job.deleteOne({ _id: id })
    return res.sendStatus(204)
}