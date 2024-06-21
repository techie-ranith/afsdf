import React from 'react'
import JobCardSecondary from '@/components/layouts/jobCardSecondary'
import JobDescription from '@/components/layouts/jobDescription'

const page = () => {
  return (
    <div className='flex justify-center items-start gap-4'>
      <div className='flex flex-col items-center justify-center gap-4 overflow-y-auto h-[600px]'>
        <JobCardSecondary />
        <JobCardSecondary />
        <JobCardSecondary />
        <JobCardSecondary />
        <JobCardSecondary />
      </div>
      <JobDescription />
    </div>
  )
}

export default page
