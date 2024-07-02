'use client'
import React, { useState, useEffect } from 'react';
import JobCardSecondary, { JobCardSecondaryProps } from '@/components/layouts/cards/jobCardSecondary';
import JobDescription, { JobDescriptionProps } from '@/components/layouts/cards/jobDescription';
import SearchComponent from '@/components/layouts/cards/SearchComponent';

const Page: React.FC = () => {
  const [jobData, setJobData] = useState<JobCardSecondaryProps[] | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobDescriptionProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/jobs');
        const data = await response.json();
        setJobData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const fetchJobDetails = async (jobId: string) => {
    try {
      const response = await fetch(`/api/jobs${jobId}`);
      const data = await response.json();
      setSelectedJob(data);
    } catch (error) {
      console.error('Error fetching job details:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!jobData) {
    return <div>No job data available</div>;
  }

  return (
    <div className='flex justify-center gap-4'>
      <SearchComponent />
      <div className='flex flex-col justify-center gap-4'>
        {jobData.map((job, index) => (
          <div key={index} onClick={() => fetchJobDetails(job.id)}>
            <JobCardSecondary
              logoSrc={job.logoSrc}
              iconSrc={job.iconSrc}
              companyName={job.companyName}
              jobTitle={job.jobTitle}
              location={job.location}
              tags={job.tags}
              date={job.date}
            />
          </div>
        ))}
        {selectedJob && (
          <div className='grids grid-cols-1'>
            <JobDescription {...selectedJob} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
