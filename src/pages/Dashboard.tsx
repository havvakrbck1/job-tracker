
import React, { useState, useEffect, useMemo } from 'react';
import JobForm from '../components/JobForm';
import { v4 as uuidv4 } from 'uuid'; // uuid'yi import et


export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description?: string;
}

const LOCAL_STORAGE_KEY = 'jobTrackerApp.jobs';

const Dashboard: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>(() => {
    const storedJobs = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedJobs) {
      try {
        return JSON.parse(storedJobs) as Job[];
      } catch (error) {
        console.error("localStorage'dan işler okunurken hata oluştu:", error);
        return [];
      }
    }
    
    return [
      { id: uuidv4(), title: 'Örnek Frontend Dev', company: 'Tech Co', location: 'İstanbul' },
    ];
  });

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(jobs));
  }, [jobs]);

  const handleDeleteJob = (jobId: string) => {
    setJobs(prevJobs => prevJobs.filter(job => job.id !== jobId));
  };

  const handleAddJob = (newJobData: Omit<Job, 'id'>) => {
    const newJobWithId: Job = {
      ...newJobData,
      id: uuidv4(), 
    };
    setJobs(prevJobs => [newJobWithId, ...prevJobs]);
  };

  const filteredJobs = useMemo(() => {
    if (!searchTerm) {
      return jobs;
    }
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return jobs.filter(job =>
      job.title.toLowerCase().includes(lowercasedSearchTerm) ||
      job.company.toLowerCase().includes(lowercasedSearchTerm) ||
      job.location.toLowerCase().includes(lowercasedSearchTerm)
    );
  }, [jobs, searchTerm]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">İş İlanlarım</h1>

      <JobForm onAddJob={handleAddJob} />

      <div className="my-8 p-6 bg-gray-50 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">İlanlarda Ara</h2>
        <input
          type="text"
          placeholder="Pozisyon, şirket veya konuma göre ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          {searchTerm ? 'Arama Sonuçları' : 'Eklenen İlanlar'} ({filteredJobs.length} ilan)
        </h2>
        {filteredJobs.length === 0 ? (
          <p className="text-gray-500">
            {searchTerm ? 'Arama kriterlerinize uygun ilan bulunamadı.' : 'Henüz eklenmiş bir iş ilanı yok.'}
          </p>
        ) : (
          <ul className="space-y-4">
            {filteredJobs.map((job) => (
              <li key={job.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600">{job.title}</h3>
                    <p className="text-md text-gray-700">{job.company}</p>
                    <p className="text-sm text-gray-500">{job.location}</p>
                    {job.description && (
                      <p className="mt-2 text-sm text-gray-600">{job.description}</p>
                    )}
                  </div>
                  <button
                    onClick={() => handleDeleteJob(job.id)}
                    className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded text-sm transition duration-150 ease-in-out"
                  >
                    Sil
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;