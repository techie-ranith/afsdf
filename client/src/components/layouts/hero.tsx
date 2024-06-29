"use client"
import Image from 'next/image'
import React from 'react'
import HeroImage from "../../../public/HeroImage.png"
import Button from '@mui/material/Button';
import "../../styles/globals.css";
import GoogleIcon from '../Icons/GoogleIcon';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const hero = () => {


  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const haddlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok) {
       
        
          router.push('/employer/overview');
          console.log('Post job is true');
      
        }
        
      } 
      

    
    
    catch (error) {
      console.error(error);
    }
  };
  





  return (


    







    <div className='flex items-start justify-center gap-40'>
      <div>
        <div className='text-8xl font-bold'>Your Step into a new career</div>
        <Button sx={{
        border: '2px solid black', // Adjust the border style as needed
        borderRadius: '20px',
       
        display: 'flex',
        alignItems: 'center',
       
        height:'50px',
        width :'470px',
        color:'#606060',
        fontFamily: 'inter',
        '&:hover': {
        
          borderColor: 'blue',
          color : 'blue',
           
        },

        }}  onClick={() => signIn('google')}>
         
    <div style={{ display: 'flex', flexDirection: 'row', gap: '3px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '160px' }}>
        
           <div>
                <span style={{ fontWeight: 'bold', textTransform: 'lowercase'  }}>Continue as </span>
                <span  style={{  textTransform: 'lowercase' }}>User@gmail.com</span>
            </div>
        <div>
          <GoogleIcon/>
        </div>
        </div>
    </div>
        
        </Button>
        <div className=''>
          <div className='flex items-center justify-center'>
            <div></div>
            <div></div>
          </div>
          <div className='font-space-mono  w-[380px]' >By clicking Continue to join or Sign In, you agree to Recruitwise’s <span className=' text-secondary-600'>User Agreement, Privacy Policy</span>  and  <span className=' text-secondary-600'>Cookie Policy</span></div>
          <div className=' flex  gap-3 text-[20px] font-bold'>
          <hr style={{ borderTop: '1px solid #000000', margin: '15px ', width: '221px' }}/>or<hr style={{ borderTop: '1px solid #000000', margin: '15px 0', width: '221px'}} />
          </div>


          <form  onSubmit={haddlesubmit}>
       
          <FormControl>
          <div>
          <FormLabel sx={{fontWeight: 'bold'}}>Username or Email</FormLabel>
           <Input placeholder="abc@gmail.com"  sx={{ width: '470px',height:'42px' ,borderRadius:'30px',borderColor:'black',border: '2px solid black' }} type ='email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
           </div>
           <div>
           <FormLabel sx={{fontWeight: 'bold'}}>Password</FormLabel>
          <Input placeholder="xxxxxxxxxxxxxxxxx"  sx={{ width: '470px',borderRadius:'30px',height:'42px' ,borderColor:'black',border: '2px solid black'}} type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
          </div>
          </FormControl>
          <div>
            <a href="/" className=' font-space-mono font-bold'> 
             <span className='text-[#2421C4]'> Forgot Password ?</span>
            </a>
            </div>
            <div>
            <Button sx={{backgroundColor:'#2421C4',color:'white',borderRadius:'15px',width:'154px',height:'55px', '&:hover': {
        
        borderColor: 'blue',
        color : 'white',
        backgroundColor:'#303f9f',
         
      },
      fontSize:'17px',
      fontWeight:'bold',
      
      }} type="submit"  >Sign in</Button>
            
            </div>

          </form>

          <span className='font-space-mono font-bold '>New  to RECRUITWISE? <a href="/signup"><span  className=' text-[#2421C4]'>Sign Up</span></a></span>

          
         
        </div>
      </div>


      <div>
        <Image src={HeroImage} alt=''></Image>
      </div>



    </div>
  )
}
export default hero
