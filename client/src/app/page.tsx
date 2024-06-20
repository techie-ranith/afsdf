// page.tsx
import JobCard from '@/components/layouts/JobCard';
import React from 'react';

// Ensure the correct path

const Page = () => {
  const jobCardProps1 = {
    jobTitle: 'Software Engineer',
    company: 'Google',
    location: 'Mountain View, CA',
    salary: '$150,000',
    description:
      'Google is looking for a software engineer to join our team. You will be working on the search team to improve our search results.',

  };

  const jobCardProps2 = {
    jobTitle: 'Product Manager',
    company: 'Facebook',
    location: 'Menlo Park, CA',
    salary: '$200,000',
    description:
      'Facebook is looking for a product manager to join our team. You will be working on the ads team to improve our ad results.',
    
    
  };

  const jobCardProps3 = {
    jobTitle: 'Data Scientist',
    company: 'Data Analytics Corp.',
    location: 'New York, NY',
    salary: '$90,000 - $110,000',
    description: 'Seeking a Data Scientist to analyze large amounts of raw information to find patterns.',
  };


  const jobCardProps4 = {
    jobTitle: 'UX/UI Designer',
    company: 'Creative Designs LLC',
    location: 'Los Angeles, CA',
    salary: '$70,000 - $90,000',
    description: 'Looking for a UX/UI Designer to create user-friendly and appealing web applications.',
  };


  const jobCardProps5 = {
    jobTitle: 'Marketing Specialist',
    company: 'Global Marketing Agency',
    location: 'Chicago, IL',
    salary: '$60,000 - $80,000',
    description: 'We are seeking a Marketing Specialist to help us with our digital marketing campaigns.',
  };


  const jobCardProps6 = {
    jobTitle: 'Human Resources Specialist',
    company: 'Corporate HR Solutions',
    location: 'Seattle, WA',
    salary: '$55,000 - $70,000',
    description: 'We are looking for an HR Specialist to manage employee relations and HR processes.',
  };

  const jobCardProps7 = {
    jobTitle: 'Sales Manager',
    company: 'Retail Solutions Inc.',
    location: 'Miami, FL',
    salary: '$75,000 - $95,000',
    description: 'We need a Sales Manager to lead our sales team and drive revenue growth.',
  };

  const jobCardProps8 = {
    jobTitle: 'Customer Support Representative',
    company: 'Tech Support Co.',
    location: 'Remote',
    salary: '$40,000 - $50,000',
    description: 'Looking for a Customer Support Representative to assist our clients with technical issues.',
  };


  const jobCardProps9 = {
    jobTitle: 'Customer Support Representative',
    company: 'Tech Support Co.',
    location: 'Remote',
    salary: '$40,000 - $50,000',
    description: 'Looking for a Customer Support Representative to assist our clients with technical issues.',
  };

  const jobCardProps10 = {
    jobTitle: 'Customer Support Representative',
    company: 'Tech Support Co.',
    location: 'Remote',
    salary: '$40,000 - $50,000',
    description: 'Looking for a Customer Support Representative to assist our clients with technical issues.',
  };





  return (
      <div className='flex flex-col items-center justify-center w-full'>
        <JobCard {...jobCardProps1} />
        <JobCard {...jobCardProps2} />
        <JobCard {...jobCardProps3} />
        <JobCard {...jobCardProps4} />
        <JobCard {...jobCardProps5} />
        <JobCard {...jobCardProps6} />
        <JobCard {...jobCardProps7} />
        <JobCard {...jobCardProps8} />
        <JobCard {...jobCardProps9} />
        <JobCard {...jobCardProps10} />



      </div>
    );
}

export default Page;
