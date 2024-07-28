"use client"
import React, { useState } from 'react';
import JobForm from "@/components/Forms/JobForm";
import CommonSearchFilter from '@/components/layouts/cards/CommonSearchFilter';
import DataGrid from '@/components/DataGrids/datagrid';
import { GridColDef } from '@mui/x-data-grid';
import { Button, Dialog, DialogTitle, DialogContent } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'Title', headerName: 'Meeting Title', width: 150, editable: true },
  { field: 'JobDescription', headerName: 'Meeting Description', width: 150, editable: true },
  { field: 'Date', headerName: 'Date', type: 'number', width: 110, editable: true },
  { field: 'attendies', headerName: 'attendies', description: 'This column has a value getter and is not sortable.', sortable: false, width: 160, valueGetter: (value, row) => `${row.Title || ''} ${row.JobDescription || ''}` },
];

const rows = [
  { id: 1, JobDescription: 'Snow', Title: 'Jon', DueDate: 14 },
  { id: 2, JobDescription: 'Lannister', Title: 'Cersei', DueDate: 31 },
  { id: 3, JobDescription: 'Lannister', Title: 'Jaime', DueDate: 31 },
  { id: 4, JobDescription: 'Stark', Title: 'Arya', DueDate: 11 },
  { id: 5, JobDescription: 'Targaryen', Title: 'Daenerys', DueDate: 23 },
  { id: 6, JobDescription: 'Melisandre', Title: "Ranith", DueDate: 150 },
  { id: 7, JobDescription: 'Clifford', Title: 'Ferrara', DueDate: 44 },
  { id: 8, JobDescription: 'Frances', Title: 'Rossini', DueDate: 36 },
  { id: 9, JobDescription: 'Roxie', Title: 'Harvey', DueDate: 23 },
];

const Page = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className='flex items-center justify-between'>
        <CommonSearchFilter />
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Post a Job
        </Button>
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
          <DialogTitle>Post a Job</DialogTitle>
          <DialogContent>
            <JobForm handleClose={handleClose} />
          </DialogContent>
        </Dialog>
      </div>
      <DataGrid rows={rows} columns={columns} gridwidth="80%" pageSize={5}></DataGrid>
    </div>
  );
};

export default Page;
