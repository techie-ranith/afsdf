'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ComboBox from "@/components/layouts/other/ComboBox";
import DropDown from "@/components/layouts/cards/DropDown";
import Button from '@/components/Buttons/Buttons';

interface Option {
  label: string;
  value: string;
}

interface Data {
  [key: string]: Option[];
}

interface SearchParams {
  [key: string]: string;
}

interface SearchComponentProps {
  searchParams: SearchParams;
  setSearchParams: React.Dispatch<React.SetStateAction<SearchParams>>;
  handleSearch: (params: SearchParams) => void;
  searchFields: {
    key: keyof SearchParams;
    component: 'ComboBox' | 'DropDown';
    placeholder?: string;
    title?: string;
    apiEndpoint: string;
  }[];
}

const SearchComponent: React.FC<SearchComponentProps> = ({ searchParams, setSearchParams, handleSearch, searchFields }) => {
  const [data, setData] = useState<Data>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = searchFields.map(async (field) => {
          const response = await axios.get(field.apiEndpoint);
          return {
            [field.key]: response.data.map((item: string) => ({ label: item, value: item }))
          };
        });

        const results = await Promise.all(promises);
        const formattedData = results.reduce((acc, curr) => ({ ...acc, ...curr }), {});
        setData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchFields]);

  const handleFieldChange = (key: keyof SearchParams, value: string) => {
    setSearchParams(prevParams => ({
      ...prevParams,
      [key]: value
    }));
  };

  const handleSearchClick = () => {
    handleSearch(searchParams);
  };

  return (
    <div className='flex flex-col gap-2 border-2 shadow-lg rounded-md p-4 border-primary-800'>
      <div className='flex items-center justify-center gap-4'>
        {searchFields.map((field, index) => (
          field.component === 'ComboBox' ? (
            <ComboBox 
              key={index}
              data={data[field.key] || []}
              placeholder={field.placeholder || ''}
              onChange={(value: string) => handleFieldChange(field.key, value)}
            />
          ) : (
            <DropDown 
              key={index}
              title={field.title || ''}
              items={data[field.key] || []}
              onChange={(value: string) => handleFieldChange(field.key, value)}
            />
          )
        ))}
        <Button variant="primary" size="medium" onClick={handleSearchClick}>Search</Button>
      </div>
      <div className='flex items-center justify-between'>
        <Button variant={'primary'} size={'medium'}>Clear Filter</Button>
      </div>
    </div>
  );
};

export default SearchComponent;
