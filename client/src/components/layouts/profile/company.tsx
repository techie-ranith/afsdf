"use client"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

function Company() {
    const {data:session} = useSession();
    const [companyname, setcompnayname] = React.useState('');
    const [companytype,setcompanytype]=React.useState('');
    const [bio,setbio]=React.useState('');
    const [companyemail,setcompanyemail]=React.useState('');
   
    
  return (
    <div>
        <Stack
        spacing={4}
        sx={{
          display: 'flex',
          maxWidth: '800px',
          mx: 'auto',
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      > 
        <form >
      <Card>
        <Box sx={{ mb: 1 }}>
          <Typography level="title-md">Company info</Typography>
        
        </Box>
        <Divider />

        <Stack
          direction="row"
          spacing={3}
          sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
        >
          <Stack direction="column" spacing={1}>
            <AspectRatio
              ratio="1"
              maxHeight={200}
              sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}
            >
              <Image src="/logo.png" alt="Profile Picture" height={100} width={100} />
              </AspectRatio>
            <IconButton
              aria-label="upload new picture"
              size="sm"
              variant="outlined"
              color="neutral"
              sx={{
                bgcolor: 'background.body',
                position: 'absolute',
                zIndex: 2,
                borderRadius: '50%',
                left: 100,
                top: 170,
                boxShadow: 'sm',
              }}
            >
              <EditRoundedIcon />
            </IconButton>
          </Stack>

          <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <Stack spacing={1}>
              <FormLabel>Company Name</FormLabel>
              <FormControl
                sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
              >
                <Input size="sm" value={companyname}  placeholder={session?.organization?.orgName || "Enter Company Name"}  onChange={(e) => setcompnayname(e.target.value)} />
              </FormControl>
            </Stack>
            <Stack direction="row" spacing={2}>
              <FormControl>
                <FormLabel>Company Type</FormLabel>
                <Input size="sm" value={companytype} placeholder={session?.organization?.orgType || "Enter Company Type"} onChange={(e) => setcompanytype(e.target.value)}   />
              </FormControl>
              
              <FormControl sx={{ flexGrow: 1 }}>
                <FormLabel>Company  Email</FormLabel>
                <Input
                  size="sm"
                  name='secoundemail'
                  value={companyemail}
                  startDecorator={<EmailRoundedIcon />}
                  placeholder={session?.organization?.contactEmail || "Enter your Comapny Email "}
                  onChange={(e) => setcompanyemail(e.target.value)} 
                  sx={{ flexGrow: 1 }}
                />
              </FormControl>
              
              
            </Stack>

             <FormControl>
                <FormLabel>Company Address</FormLabel>
                <Input size="sm" value={companytype} placeholder={session?.organization?.orgType || "Enter Company Type"} onChange={(e) => setcompanytype(e.target.value)}   />
              </FormControl>

              <FormControl>
                <FormLabel>Company Industry</FormLabel>
                <Input size="sm" value={companytype} placeholder={session?.organization?.orgType || "Enter Company Type"} onChange={(e) => setcompanytype(e.target.value)}   />
              </FormControl>
              <FormControl>
                <FormLabel>Contact phone number</FormLabel>
                <Input size="sm" value={companytype} placeholder={session?.organization?.orgType || "Enter Company Type"} onChange={(e) => setcompanytype(e.target.value)}   />
              </FormControl>
          
          </Stack>
        </Stack>

  
   
        <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
          <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
            <Button size="sm" variant="outlined" color="neutral" >
              Cancel
            </Button>
            <Button size="sm" variant="solid" type='submit'>
              Save
            </Button>
          </CardActions>
        </CardOverflow>
      </Card>
    </form>
      
        







      </Stack>

      
    </div>
  )
}

export default Company
