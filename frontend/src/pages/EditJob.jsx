import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/spinner";
import { toast } from "react-toastify";

const EditJob = ({ EditForm }) => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  const [jobData, setJobData] = useState({
    title: "",
    type: "",
    location: "",
    description: "",
    salary: "",
    companyName: "",
    companyDescription: "",
    contactEmail: "",
    contactPhone: ""
  });

  // Fetch job data
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${API_URL}/jobs/${id}`);
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();

        // التحقق من وجود البيانات
        if (!data.job) {
          throw new Error("Job data not found");
        }

        // تحديث الحقول الفردية عند جلب البيانات
        setJobData({
          title: data.job.title || "",
          type: data.job.type || "",
          location: data.job.location || "",
          description: data.job.description || "",
          salary: data.job.salary || "",
          companyName: data.job.company?.name || "",
          companyDescription: data.job.company?.description || "",
          contactEmail: data.job.company?.contactEmail || "",
          contactPhone: data.job.company?.contactPhone || ""
        });

      } catch (err) {
        console.error("Error fetching job data:", err);
        toast.error("Failed to load job data");
        navigate("/jobs"); // إعادة توجيه في حالة الخطأ
      } finally {
        setLoading(false);
      }
    };
    
    if (id) {
      fetchJobs();
    }
  }, [API_URL, id, navigate]); // إضافة id و navigate للـ dependency array

  // Click to Edit
  const ClickToEdit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const editedJob = {
        _id: id,
        title: jobData.title,
        type: jobData.type,
        location: jobData.location,
        description: jobData.description,
        salary: jobData.salary,
        company: {
          name: jobData.companyName,
          description: jobData.companyDescription,
          contactEmail: jobData.contactEmail,
          contactPhone: jobData.contactPhone,
        },
      };

      await EditForm(editedJob);
      toast.success('Job Updated Successfully');
      navigate("/jobs");
    } catch (error) {
      console.error("Error updating job:", error);
      toast.error("Failed to update job");
    } finally {
      setLoading(false);
    }
  };

  // Loading state
  if (loading) {
    return <Spinner loading={loading} />;
  }

  return (
    <>
      <section className="bg-indigo-50">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={ClickToEdit}>
              <h2 className="text-3xl text-center font-semibold mb-6">Edit Job</h2>

              <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
                  Job Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={jobData.type}
                  onChange={(e) => setJobData(prev => ({ ...prev, type: e.target.value }))}
                  className="border rounded w-full py-2 px-3"
                  required
                >
                  <option value="">Select Job Type</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Job Listing Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={jobData.title}
                  onChange={(e) => setJobData(prev => ({ ...prev, title: e.target.value }))}
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="e.g. Software Developer"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={jobData.description}
                  onChange={(e) => setJobData(prev => ({ ...prev, description: e.target.value }))}
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Add any job duties, expectations, requirements, etc"
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="salary" className="block text-gray-700 font-bold mb-2">
                  Salary
                </label>
                <select
                  id="salary"
                  name="salary"
                  value={jobData.salary}
                  onChange={(e) => setJobData(prev => ({ ...prev, salary: e.target.value }))}
                  className="border rounded w-full py-2 px-3"
                  required
                >
                  <option value="">Select Salary Range</option>
                  <option value="Under $50K">Under $50K</option>
                  <option value="$50K - 60K">$50K - $60K</option>
                  <option value="$60K - 70K">$60K - $70K</option>
                  <option value="$70K - 80K">$70K - $80K</option>
                  <option value="$80K - 90K">$80K - $90K</option>
                  <option value="$90K - 100K">$90K - $100K</option>
                  <option value="$100K - 125K">$100K - $125K</option>
                  <option value="$125K - 150K">$125K - $150K</option>
                  <option value="$150K - 175K">$150K - $175K</option>
                  <option value="$175K - 200K">$175K - $200K</option>
                  <option value="Over $200K">Over $200K</option>
                </select>
              </div>

              <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2'>
                  Location
                </label>
                <input
                  type='text'
                  id='location'
                  name='location'
                  value={jobData.location}
                  onChange={(e) => setJobData(prev => ({ ...prev, location: e.target.value }))}
                  className='border rounded w-full py-2 px-3 mb-2'
                  placeholder='Company Location'
                  required
                />
              </div>

              <h3 className="text-2xl mb-5">Company Info</h3>

              <div className="mb-4">
                <label htmlFor="company" className="block text-gray-700 font-bold mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={jobData.companyName}
                  onChange={(e) => setJobData(prev => ({ ...prev, companyName: e.target.value }))}
                  className="border rounded w-full py-2 px-3"
                  placeholder="Company Name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="company_description" className="block text-gray-700 font-bold mb-2">
                  Company Description
                </label>
                <textarea
                  id="company_description"
                  name="company_description"
                  value={jobData.companyDescription}
                  onChange={(e) => setJobData(prev => ({ ...prev, companyDescription: e.target.value }))}
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="What does your company do?"
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="contact_email" className="block text-gray-700 font-bold mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  value={jobData.contactEmail}
                  onChange={(e) => setJobData(prev => ({ ...prev, contactEmail: e.target.value }))}
                  className="border rounded w-full py-2 px-3"
                  placeholder="Email address for applicants"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="contact_phone" className="block text-gray-700 font-bold mb-2">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  id="contact_phone"
                  name="contact_phone"
                  value={jobData.contactPhone}
                  onChange={(e) => setJobData(prev => ({ ...prev, contactPhone: e.target.value }))}
                  className="border rounded w-full py-2 px-3"
                  placeholder="Optional phone for applicants"
                />
              </div>

              <div>
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline disabled:opacity-50"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Updating...' : 'Update Job'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditJob;