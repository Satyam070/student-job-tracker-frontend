import React, { useState } from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import './styles.css';

function App() {
  const [refresh, setRefresh] = useState(false);
  return (
    <div className="p-4">
      <h1 className='headi'>Student Job Tracker</h1>
      <JobForm onAdd={() => setRefresh(!refresh)} />
      <JobList key={refresh} />
    </div>
  );
}

export default App;
