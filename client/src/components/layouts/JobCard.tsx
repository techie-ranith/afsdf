// JobCard.js or JobCard.tsx
import React from 'react';


type JobCardProps = {
  jobTitle: string;
  company: string;
  location: string;
  salary: string;
  description: string;
};

const JobCard = ({ jobTitle, company, location, salary, description }: JobCardProps) => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 m-4 w-full">
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">{jobTitle}</h2>
        <p className="text-gray-700 mb-1">{company}</p>
        <p className="text-gray-700 mb-1">{location}</p>
        <p className="text-gray-700 mb-4">{salary}</p>
        <p className="text-gray-600">{description}</p>
      </div>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
