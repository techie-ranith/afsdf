'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ComboBox from "@/components/layouts/other/ComboBox";
import DropDown from "@/components/layouts/cards/DropDown";
import Button from '@/components/Buttons/Buttons';

const SearchComponent = () => {
  const [data, setData] = useState({
    jobTitles: [],
    locations: [],
    jobTypes: [],
    modalities: [],
    countries: [],
    salaries: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDropdownChange = (selectedValue: string) => {
    console.log('Selected value:', selectedValue);
  };

  return (
    <div className='flex flex-col gap-2 border-2 shadow-lg rounded-md p-4 border-primary-800'>
      <div className='flex items-center justify-center gap-4'>
        <ComboBox data={data.jobTitles} placeholder='select keywords'></ComboBox>
        <ComboBox data={data.locations} placeholder='location'></ComboBox>
        <Button variant="primary" size="medium">Search</Button>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-2'>
          <DropDown title="Job Type" items={data.jobTypes} onChange={handleDropdownChange}></DropDown>
          <DropDown title="Modality" items={data.modalities} onChange={handleDropdownChange}></DropDown>
          <DropDown title="Country" items={data.countries} onChange={handleDropdownChange}></DropDown>
          <DropDown title="Salary" items={data.salaries} onChange={handleDropdownChange}></DropDown>
        </div>
        <Button variant={'primary'} size={'medium'}>Clear Filter</Button>
      </div>
    </div>
  );
}

export default SearchComponent;
