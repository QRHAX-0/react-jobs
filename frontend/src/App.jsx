import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MainLayout from "./layouts/MainLayout"
import AllJobs from "./pages/AllJobs"
import JobPage from "./pages/JobPage"
import NotFoundPage from "./pages/NotFoundPage"
import AddJob from "./pages/AddJob"
import EditJob from "./pages/EditJob"
const App = () => {

  const addJob = async (newJob) => {
    const res = await fetch("/api/add-job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJob)
    });
    return;
  }
  
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE"
    });
    return;
  }

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job._id}/edit`,{
      method:"PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(job)
    })
    return;
  }
    
    
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<AllJobs />} />
        <Route path="/jobs/:id" element={<JobPage DeleteJob={deleteJob} />} />
        <Route path="/add-job" element={<AddJob addNewJob={addJob} />} />
        <Route path="/jobs/:id/edit" element={<EditJob EditForm={updateJob}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App