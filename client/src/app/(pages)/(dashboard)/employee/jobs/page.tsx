// /pages/index.tsx
'use client'
import React, { useEffect, useState } from 'react';
import JobCardSecondary, { JobCardSecondaryProps } from '@/components/layouts/jobCardSecondary';
import JobDescription from '@/components/layouts/jobDescription';

const Page: React.FC = () => {
  const [jobs, setJobs] = useState<JobCardSecondaryProps[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/api/jobs');
        const data: JobCardSecondaryProps[] = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  const [jobDescription, setjobDescription] = useState<JobCardSecondaryProps[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/api/jobs');
        const data: JobCardSecondaryProps[] = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);



  return (
    <div>
        <div>
        {jobs.slice(0, 10).map((job, index) => (
          <JobCardSecondary
            key={index}
            logoSrc={job.logoSrc}
            iconSrc={job.iconSrc}
            companyName={job.companyName}
            jobTitle={job.jobTitle}
            location={job.location}
            tags={job.tags}
            date={job.date}
          />
        ))}
        </div>
        <div>
        {jobs.slice(0, 10).map((job, index) => (
          <jobDescription
            key={index}
            logoSrc={job.logoSrc}
            iconSrc={job.iconSrc}
            companyName={job.companyName}
            jobTitle={job.jobTitle}
            location={job.location}
            tags={job.tags}
            date={job.date}
          />
        ))}
        </div>
    </div>
  );
}

export default Page;
