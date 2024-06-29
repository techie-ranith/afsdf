import Image from 'next/image'
import React from 'react'
import logo from '../../../../public/logo.png'
import Button from '../../Buttons/Buttons'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between border-2 w-full'>
        <Image src={logo} alt='logo' width={60} className='border-0 rounded-xl'></Image>
        <div className='flex items-center justify-center gap-4'>
            <div className='flex items-center justify-center'>
                <div></div>
                <div>Jobs</div>
            </div>
            <div className='flex items-center justify-center'>
                <div></div>
                <div></div>
            </div>
            <div className='flex items-center justify-center'>
                <div></div>
                <div>Blogs</div>
            </div>
            <div className='flex items-center justify-center'>
                <div></div>
                <div></div>
            </div>
        </div>
        {/* <div className='flex items-center justify-center'>
            <Button variant={'primary'} size={'medium'}>Sign In</Button>
            <Button variant={'primary'} size={'medium'}>Sign Up</Button>
        </div> */}
    </div>
  )
}

export default Navbar
