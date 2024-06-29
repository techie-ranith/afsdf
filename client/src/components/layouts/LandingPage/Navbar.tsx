import Image from 'next/image'
import React from 'react'
import logo from '../../../../public/recruitwise.png'
import Button from '../../Buttons/Buttons'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FeedIcon from '@mui/icons-material/Feed';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-full py-2 px-10 border-primary-200'>
      <Link href="/">  <Image src={logo} alt='logo' width={160} className='border-0 rounded-xl'></Image></Link>
        <div className='flex items-center justify-center gap-16'>

        <Link href="/">
                 <div className='flex flex-col items-center justify-center'>
                <BusinessCenterIcon></BusinessCenterIcon>
                <div>Jobs</div>
                
            </div></Link>

            <Link href="/">
            <div className='flex flex-col items-center justify-center'>
                <CategoryIcon></CategoryIcon>
                <div>Features</div>
            </div>
            </Link>
            <Link href="/">
            <div className='flex flex-col items-center justify-center'>
                <FeedIcon></FeedIcon>
                <div>Blogs</div>
            </div>
            </Link>
            <Link href="/">
            <div className='flex flex-col items-center justify-center'>
                <PeopleIcon></PeopleIcon>
                <div>About Us</div>
            </div>
            </Link>
        </div>
        
    </div>
  )
}

export default Navbar
