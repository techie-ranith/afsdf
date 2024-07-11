"use client"
import React, { useState } from 'react';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, Grid, Typography, Box } from '@mui/material';
import DataGridDemo from '@/components/DataGrids/datagrid';

import { DataGrid, GridColDef } from '@mui/x-data-grid';

const JobPostingForm = () => {

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





  
 
  const [formData, setFormData] = useState({
    company: '',
    jobTitle: '',
    jobDescription: '',
    contractType: '',
    location: '',
    workingLanguage: '',
    jobCategory: '',
    jobLink: '',
    email: '',
    companySize: '',
    industry: '',
  });

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name as string]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };
  const contractType = [
    {
      value: 'Full-Time',
      label: 'Full-Time',
    },
    {
      value: 'Part-Time',
      label: 'Part-Time',
    },
    {
      value: 'Contract',
      label: 'Contract',
    },
    {
      value: 'Internship',
      label: 'Internship',
    },
  ];


  return (
    <div className='pl-52' >
     <Box >

    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <TextField
            required
            fullWidth
            id="company"
            name="company"
            label="Company *"
            value={formData.company}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            required
            fullWidth
            id="jobTitle"
            name="jobTitle"
            label="Job Title *"
            value={formData.jobTitle}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            required
            fullWidth
            multiline
            rows={4}
            id="jobDescription"
            name="jobDescription"
            label="Job Description *"
            value={formData.jobDescription}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={7} >
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
        >
          {contractType.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>

        <Grid item xs={7}>
          <TextField
            required
            fullWidth
            id="location"
            name="location"
            label="Location *"
            value={formData.location}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            required
            fullWidth
            id="workingLanguage"
            name="workingLanguage"
            label="Working Language *"
            value={formData.workingLanguage}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            required
            fullWidth
            id="jobCategory"
            name="jobCategory"
            label="Category of Job *"
            value={formData.jobCategory}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            required
            fullWidth
            id="jobLink"
            name="jobLink"
            label="Link to the Job *"
            value={formData.jobLink}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            required
            fullWidth
            id="email"
            name="email"
            type="email"
            label="Email *"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            required
            fullWidth
            id="companySize"
            name="companySize"
            label="Company Size"
            value={formData.companySize}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            required
            fullWidth
            id="industry"
            name="industry"
            label="Industry"
            value={formData.industry}
            onChange={handleChange}
          />
        </Grid>
        
        <Grid item xs={7}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>

   



    </Box>
    <div className='flex flex-col items-center justify-center flex-1 '>
        <p>Applied Jobs</p>
        <DataGrid rows={rows} columns={columns} gridwidth='80%' pageSize={5}/>
      
      </div>
    </div>
  );
};

export default JobPostingForm;
