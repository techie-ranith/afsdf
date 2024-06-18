import React from 'react'




type JobCardProps = {
  jobTitle: string;
  company: string;
  location: string;
  salary: string;
  description: string;
};

const JobCard = ({ jobTitle, company, location, salary, description }: JobCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{jobTitle}</div>
        <p className="text-gray-700 text-base">
          {company}
        </p>
        <p className="text-gray-700 text-base">
          {location}
        </p>
        <p className="text-gray-700 text-base">
          {salary}
        </p>
        <p className="text-gray-700 text-base mt-4">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Apply Now
        </button>
      </div>
    </div>
  );
};

const JobList = () => {
  const jobs = [
    {
      jobTitle: 'Frontend Developer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      salary: '$120,000 - $140,000',
      description: 'We are looking for a skilled frontend developer to join our team.',
    },
    {
      jobTitle: 'Backend Developer',
      company: 'Innovatech',
      location: 'New York, NY',
      salary: '$110,000 - $130,000',
      description: 'We need a backend developer to help us build scalable web applications.',
    },
    // Add more job entries here
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {jobs.map((job, index) => (
        <JobCard
          key={index}
          jobTitle={job.jobTitle}
          company={job.company}
          location={job.location}
          salary={job.salary}
          description={job.description}
        />
      ))}
    </div>
  );
};




export default JobCard