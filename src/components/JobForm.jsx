import React, { useState } from 'react';
import { addJob } from '../api';

export default function JobForm({ onAdd }) {
  const [form, setForm] = useState({
    company: '',
    role: '',
    status: 'Applied',
    date: '',
    link: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await addJob(form);
    onAdd(res.data);
    setForm({ company: '', role: '', status: 'Applied', date: '', link: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        name="company"
        placeholder="Company"
        onChange={handleChange}
        value={form.company}
        required
        className="form-input"
      />
      <input
        name="role"
        placeholder="Role"
        onChange={handleChange}
        value={form.role}
        required
        className="form-input"
      />
      <select
        name="status"
        onChange={handleChange}
        value={form.status}
        className="form-input"
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input
        name="date"
        type="date"
        onChange={handleChange}
        value={form.date}
        className="form-input"
      />
      <input
        name="link"
        placeholder="Link"
        onChange={handleChange}
        value={form.link}
        className="form-input"
      />
      <button type="submit" className="form-button">
        Add Job
      </button>
    </form>
  );
}
