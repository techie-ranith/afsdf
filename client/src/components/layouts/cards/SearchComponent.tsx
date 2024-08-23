'use client'
import React, { useState } from 'react';
import SearchComponent from './CommonSearchFilter';


const App = () => {
  
  const [searchParams, setSearchParams] = useState<{
    jobTitle: string;
    location: string;
    jobType: string;
    modality: string;
    country: string;
    salary: string;
  }>({
    jobTitle: '',
    location: '',
    jobType: '',
    modality: '',
    country: '',
    salary: ''
  });

  const handleSearch = (params: any) => {
    console.log('Search Params:', params);
  };

  const searchFields: {
    key: keyof typeof searchParams;
    component: 'ComboBox' | 'DropDown';
    placeholder?: string;
    title?: string;
    apiEndpoint: string;
  }[] = [
    { key: 'jobTitle', component: 'ComboBox', placeholder: 'select keywords', apiEndpoint: '/api/jobTitles' },
    { key: 'location', component: 'ComboBox', placeholder: 'location', apiEndpoint: '/api/locations' },
    { key: 'jobType', component: 'DropDown', title: 'Job Type', apiEndpoint: '/api/jobTypes' },
    { key: 'modality', component: 'DropDown', title: 'Modality', apiEndpoint: '/api/modalities' },
    { key: 'country', component: 'DropDown', title: 'Country', apiEndpoint: '/api/countries' },
    { key: 'salary', component: 'DropDown', title: 'Salary', apiEndpoint: '/api/salaries' }
  ];

  return (
    <div>
      <SearchComponent 
        searchParams={searchParams} 
        setSearchParams={setSearchParams} 
        handleSearch={handleSearch}
        searchFields={searchFields}
      />
    </div>
  );
};

export default App;
