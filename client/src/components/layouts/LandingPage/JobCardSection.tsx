import React from 'react'
import SearchComponent from '@/components/layouts/SearchComponent'
import PrimaryJobCard from '@/components/layouts/JobCardPrimary'
import Pagination from '@/components/pagination'

const JobCardSection = () => {
  return (
    <div className='flex items-center justify-center flex-col gap-8'>
        <div>
          <div>Search for Jobs</div>
        </div>
        <SearchComponent></SearchComponent>
        <div className=' grid grid-cols-3 gap-4'>
            <PrimaryJobCard></PrimaryJobCard>
            <PrimaryJobCard></PrimaryJobCard>
            <PrimaryJobCard></PrimaryJobCard>
            <PrimaryJobCard></PrimaryJobCard>
            <PrimaryJobCard></PrimaryJobCard>
            <PrimaryJobCard></PrimaryJobCard>
            <PrimaryJobCard></PrimaryJobCard>
            <PrimaryJobCard></PrimaryJobCard>
        </div>
        <Pagination></Pagination>
    </div>
  )
}

export default JobCardSection
