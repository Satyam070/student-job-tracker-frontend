import React, { useEffect, useState } from "react";
import { getJobs } from "../api";
import JobItem from "./JobItem";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState({ status: "", sort: "" });

  const fetchJobs = async () => {
    const res = await getJobs(filter);
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, [filter]);

  const handleUpdate = (updated) => {
    setJobs(jobs.map((j) => (j._id === updated._id ? updated : j)));
  };

  const handleDelete = (id) => {
    setJobs(jobs.filter((j) => j._id !== id));
  };

  return (
    <>
      <div className="filters">
        <select
          className="job-status"
          onChange={(e) => setFilter({ ...filter, status: e.target.value })}
        >
          <option value="">All</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        <select
          className="job-status"
          onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
        >
          <option value="">Sort by Date</option>
          <option value="asc">Oldest First</option>
          <option value="desc">Newest First</option>
        </select>
      </div>

      <div className="job-list">
        {jobs.map((job) => (
          <JobItem
            key={job._id}
            job={job}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
}
