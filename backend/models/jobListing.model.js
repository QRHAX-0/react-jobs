import mongoose from 'mongoose';
const Schema = mongoose.Schema({
    title: String,
    type: {
        type: String,
        enum: ['Full-Time', 'Part-Time'],
    },
    location: String,
    salary: String,
    description: String,
    company: {
        name: String,
        description: String,
        contactEmail: String,
        contactPhone: String,
    },
});


export default mongoose.model('Job', Schema);