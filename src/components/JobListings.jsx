import JobList from "./JobList"
import { useState, useEffect } from "react"
import Spinner from "./spinner";

const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => async () => {
        try {
            const fetchingData = isHome ? await fetch(`/api/jobs?limit=3`) : await fetch("/api/jobs");
            const data = await fetchingData.json();
            setJobs(data.jobs)
        } catch (err) {
            console.log(err);

        } finally {
            setLoading(false)
        }
    }, [])
    return (
        <>
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {isHome ? "Recent Jobs" : "Browse Jobs"}
                    </h2>
                    {loading ? (
                        <Spinner loading={loading} />
                    ) :
                        (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {jobs.map((job) => (
                                    < JobList key={job._id} job={job} />
                                ))}
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default JobListings