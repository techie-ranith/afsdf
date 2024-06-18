import React from 'react'
import  JobCard  from '../components/layouts/JobCard'

const page = () => {
  return (
    <div className='flex items-center justify-center'>
      <div><JobCard jobTitle="Software Engineer" company="ABC Company" location="New York" salary="$100,000" description="Lorem ipsum dolor sit amet"></JobCard></div>
      
    </div>
  )
}

export default page
