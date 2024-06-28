import React from 'react'
import SearchComponent from '@/components/layouts/SearchComponent'
import PrimaryJobCard from '@/components/layouts/PrimaryJobCard'
import Pagination from '@/components/pagination'

const JobCardSection = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
        <div></div>
        <SearchComponent></SearchComponent>
        <div>
            <PrimaryJobCard></PrimaryJobCard>
            <Pagination></Pagination>
        </div>
    </div>
  )
}

export default JobCardSection
