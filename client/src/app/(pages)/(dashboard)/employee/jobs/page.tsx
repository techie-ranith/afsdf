import React from 'react'
import JobCardSecondary from '@/components/layouts/jobCardSecondary'
import JobDescription from '@/components/layouts/jobDescription'

const page = () => {
  return (
    <div className='flex justify-center gap-4'>
      <div>
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
