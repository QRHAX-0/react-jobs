import JobList from "./JobList"
import { useState, useEffect } from "react"
import Spinner from "./spinner";

const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const apiUrl = isHome ? "/api/jobs?limit=3" : "/api/jobs";
                const response = await fetch(apiUrl);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                setJobs(data.jobs || []); // تأكد من وجود data.jobs
            } catch (err) {
                console.error("Error fetching jobs:", err);
                setJobs([]); // تعيين قائمة فارغة في حالة الخطأ
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, [isHome]); // إضافة isHome كـ dependency

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? "Recent Jobs" : "Browse Jobs"}
                </h2>
                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {jobs.length > 0 ? (
                            jobs.map((job) => (
                                <JobList key={job._id} job={job} />
                            ))
                        ) : (
                            <div className="col-span-full text-center text-gray-500">
                                No jobs found
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default JobListings;