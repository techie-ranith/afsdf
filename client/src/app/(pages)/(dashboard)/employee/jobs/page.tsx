'use client'
import React, { useState, useEffect } from 'react';
import JobCardSecondary, { JobCardSecondaryProps } from '@/components/layouts/jobCardSecondary';
import JobDescription from '@/components/layouts/jobDescription';
import SearchComponent from '@/components/layouts/SearchComponent';

const Page: React.FC = () => {
  const JobCardContainer: React.FC = () => {
    const [jobData, setJobData] = useState<JobCardSecondaryProps | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/jobData'); 
          const jobdata = await response.json();
          setJobData(jobData);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching job data:', error);
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!jobData) {
      return <div>No job data available</div>;
    }
  };

    return (
      <div className='flex justify-center gap-4'>
        <SearchComponent />
        <div className='flex flex-col justify-center gap-4'>
          <div>
            <JobCardSecondary
              logoSrc={jobData.logoSrc}
              iconSrc={jobData.iconSrc}
              companyName={jobData.companyName}
              jobTitle={jobData.jobTitle}
              location={jobData.location}
              tags={jobData.tags}
              date={jobData.date}
            />
          </div>
          <div>
            <JobDescription ></JobDescription>
          </div>
        </div>
      </div>
    );
  }

  return <JobCardContainer />;
}

export default Page;
