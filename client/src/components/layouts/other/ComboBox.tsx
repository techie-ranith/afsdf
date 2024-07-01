import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface ComboBoxProps {
  data: { label: string }[];
  placeholder:string;
}

const ComboBox: React.FC<ComboBoxProps> = ({ data, placeholder }) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data}
      getOptionLabel={(option) => option.label} // Provide a function to get the label from each item
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={placeholder} />} // Update label to "Job"
    />
  );
}

export default ComboBox;
