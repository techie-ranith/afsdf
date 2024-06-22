import React from 'react'
import JobCardSecondary from '@/components/layouts/jobCardSecondary'
import JobDescription from '@/components/layouts/jobDescription'
import SearchComponent from '@/components/layouts/SearchComponent'

const page = () => {
  return (
    <div className='flex justify-center gap-4'>
      <SearchComponent></SearchComponent>
    </div>
  )
}

export default page
