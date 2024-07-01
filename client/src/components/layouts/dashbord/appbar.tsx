import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';




const navItems = [ 'Post A Job'];

export default function DrawerAppBar() {
 
  
 
  return (
    <Box sx={{ display: 'flex '  }}>
      <AppBar sx={{ backgroundColor: '#4CAF50' }} >
        <Toolbar >
          
          <Typography
            sx={{ flexGrow: 1 ,color: 'black', fontWeight: 'bold' }}
            
             />
         
          
          <Box>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'black' }}>
                {item}
              </Button>
            ))}
            
          </Box>
        </Toolbar>
      </AppBar>
   
    
    </Box>
  );
}