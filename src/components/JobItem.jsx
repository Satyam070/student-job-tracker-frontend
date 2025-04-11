import React from 'react';
import { updateJob, deleteJob } from '../api';

export default function JobItem({ job, onUpdate, onDelete }) {
  const handleStatusChange = async (e) => {
    const res = await updateJob(job._id, { status: e.target.value });
    onUpdate(res.data);
  };

  const handleDelete = async () => {
    await deleteJob(job._id);
    onDelete(job._id);
  };

  return (
    <div className="job-item">
      <div className="job-header">
        <h4>{job.company}</h4>
        <span className="job-role">{job.role}</span>
      </div>
      <div className="job-link">
        <a href={job.link} target="_blank" rel="noreferrer">Link</a>
      </div>
      <div className="job-meta">Date: {new Date(job.date).toLocaleDateString()}</div>
      <div className="job-actions">
        <select className="job-status" value={job.status} onChange={handleStatusChange}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
