import Job from "../models/jobListing.model.js"

export const editJob = async (req, res) => {
    const { params: { id } } = req
    const { body } = req;
    await Job.updateOne({ _id: id }, { $set: { ...body } })
    res.sendStatus(200)
}