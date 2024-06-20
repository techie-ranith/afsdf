'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import icon from '../../../public/icon.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const jobCardSecondary = () => {
  return (
    <div className='flex items-center justify-between border-0 rounded-md shadow-2xl gap-4 w-[500px] p-4'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <Image src={logo} alt='logo' width={50} height={50} className='border-0 rounded-md'></Image>
        <div>text</div>
      </div>
      <div className='flex flex-col items-start justify-start gap-3'>
        <div className='text-xs'>Company Name</div>
        <div className=' text-lg font-semibold'>Software Developer</div>
        <div className='flex items-center justify-center gap-2 text-xs'>
          <LocationOnIcon></LocationOnIcon>
          <div>Katunayake</div>
        </div>
        <div className='flex items-center justify-center gap-4 text-sm'>
            <div className='border-2 border-accent-200 rounded-md px-1'>tags</div>
            <div className='border-2 border-accent-200 rounded-md px-1'>tags</div>
            <div className='border-2 border-accent-200 rounded-md px-1'>tags</div>
        </div>
      </div>
      <div className='flex items-center justify-between flex-col h-full'>
        <Image src={icon} alt='icon' width={20}></Image>
        <div className=' text-fonts-primary text-xs'>04/05/2024</div>
      </div>
    </div>
  )
}

export default jobCardSecondary
