'use client'
import React from 'react';
import DataGrid from '@/components/DataGrids/datagrid';
import { GridColDef } from '@mui/x-data-grid';
import Image from 'next/image';
import meet from "../../../../../../public/meet.png";
import zoom from '../../../../../../public/zoom.png'
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import Button from '@/components/Buttons/Buttons';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Title',
    headerName: 'Job Title',
    width: 150,
    editable: true,
  },
  {
    field: 'JobDescription',
    headerName: 'Job Description',
    width: 150,
    editable: true,
  },
  {
    field: 'EmployeeName',
    headerName: 'Employee Name',
    type: 'string', // Changed from 'number' to 'string' as it represents a name
    width: 150,
    editable: true,
  },
  {
    field: 'Meeting_status',
    headerName: 'Meeting Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'CV',
    headerName: 'View CV',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, Title: 'Software Engineer', JobDescription: 'Develop and maintain software applications.', EmployeeName: 'John Doe', Meeting_status: 'Scheduled', CV: 'View' },
  { id: 2, Title: 'Data Scientist', JobDescription: 'Analyze and interpret complex data.', EmployeeName: 'Jane Smith', Meeting_status: 'Pending', CV: 'View' },
  { id: 3, Title: 'Product Manager', JobDescription: 'Oversee the development and delivery of products.', EmployeeName: 'Emily Johnson', Meeting_status: 'Completed', CV: 'View' },
  { id: 4, Title: 'UX Designer', JobDescription: 'Design user-friendly interfaces and experiences.', EmployeeName: 'Michael Brown', Meeting_status: 'Scheduled', CV: 'View' },
  { id: 5, Title: 'DevOps Engineer', JobDescription: 'Manage infrastructure and deployment processes.', EmployeeName: 'Chris Davis', Meeting_status: 'In Progress', CV: 'View' },
];

const Hiring = () => {
  return (
    <div className='flex items-start justify-around p-10 gap-4'>
      <div className='flex items-center justify-between flex-col gap-10'>
        <div className='flex items-center flex-col justify-center border-0 shadow-xl rounded-xl p-6'>
          <div className='font-semibold text-xl flex items-center justify-start w-full'>
            Schedule a meeting here
          </div>
          <form className='flex flex-col items-center justify-center gap-4'> 
            <div className=' flex items-center justify-center p-4 gap-4 '>
              <div className='flex flex-col gap-2'>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small' />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small' />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small' />
              </div>
              <div className='flex flex-col gap-2'>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small' />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small' />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small' />
              </div>
            </div>
            <Button variant={'primary'} size={'medium'}>Submit</Button>
          </form>
        </div>
        <div className='flex flex-col items-center justify-center gap-8 border-0'>
          <div>Create an instant Meeting.</div>
          <div className='flex items-center justify-center gap-6'>
            <a href=''><Image src={meet} alt='meet icon' className='w-[200px] h-[100px] border-2 rounded-xl shadow-2xl object-cover'></Image></a>
            <a href=''><Image src={zoom} alt='zoom icon' className='w-[200px] h-[100px] border-2 rounded-xl shadow-2xl object-cover'></Image></a>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-8 items-center justify-center'>
      <DataGrid 
  rows={rows} 
  columns={columns} 
  gridwidth='100%' 
  sx={{ height: '100vh', width: '100%' }} 
  pageSize={10} 
/>
      </div>
    </div>
  );
}

export default Hiring;