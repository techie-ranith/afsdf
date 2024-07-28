import React, { useState } from 'react';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, Grid, Typography, Box } from '@mui/material';

const JobPostingForm: React.FC<{ handleClose: () => void }> = ({ handleClose }) => {
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
    handleClose();
  };

  const contractType = [
    { value: 'Full-Time', label: 'Full-Time' },
    { value: 'Part-Time', label: 'Part-Time' },
    { value: 'Contract', label: 'Contract' },
    { value: 'Internship', label: 'Internship' },
  ];

  return (
    <div className='border-0 shadow-xl'>
      <Box>
        <form onSubmit={handleSubmit} className='p-10'>
          <Grid container spacing={1}>
            {/* Add all the form fields as before */}
            {/* ... */}
            <Grid item xs={6}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default JobPostingForm;
