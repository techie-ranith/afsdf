'use client'
import React from 'react';
import DataGrid from '@/components/DataGrids/datagrid';
import { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Title',
    headerName: 'Meeting Title',
    width: 150,
    editable: true,
  },
  {
    field: 'JobDescription',
    headerName: 'Meeting Description',
    width: 150,
    editable: true,
  },
  {
    field: 'Date',
    headerName: 'Date',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'attendies',
    headerName: 'attendies',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.Title || ''} ${row.JobDescription || ''}`,
  },
];

const rows = [
  { id: 1, JobDescription: 'Snow', Title: 'Jon', DueDate: 14 },
  { id: 2, JobDescription: 'Lannister', Title: 'Cersei', DueDate: 31 },
  { id: 3, JobDescription: 'Lannister', Title: 'Jaime', DueDate: 31 },
  { id: 4, JobDescription: 'Stark', Title: 'Arya', DueDate: 11 },
  { id: 5, JobDescription: 'Targaryen', Title: 'Daenerys', DueDate: 23  },
  { id: 6, JobDescription: 'Melisandre', Title: "Ranith", DueDate: 150 },
  { id: 7, JobDescription: 'Clifford', Title: 'Ferrara', DueDate: 44 },
  { id: 8, JobDescription: 'Frances', Title: 'Rossini', DueDate: 36 },
  { id: 9, JobDescription: 'Roxie', Title: 'Harvey', DueDate: 23 },
];

const Hiring = () => {
  return (
    <div className='flex items-start justify-center gap-4'>
      <div>
        meeting scheduling form goes here
      </div>
      <div className='flex flex-col gap-8 items-center justify-center'>
            <DataGrid rows={rows} columns={columns} gridwidth='60%'/>
            <div className='flex flex-col items-center justify-center gap-8'>
              <div>Create an instant Meeting.</div>
              <div className='flex items-center justify-center gap-6'>
                <div className='w-[200px] h-[100px] border-2 rounded-xl shadow-xl'></div>
                <div className='w-[200px] h-[100px] border-2 rounded-xl shadow-xl'></div>
              </div>
            </div>
      </div>
    </div>
  );
}

export default Hiring;