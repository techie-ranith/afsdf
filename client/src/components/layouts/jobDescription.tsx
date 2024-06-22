import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.png'
import banner from '../../../public/banner.jpeg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';

const jobDescription = () => {
  return (
    <div className='flex flex-col items-center justify-center rounded-lg px-2 border-0 shadow-xl gap-12 w-[600px] overflow-auto max-h-[600px] pt-36 relative'>
      <Image src={banner} alt='banner' className='mt-52 border-0 rounded-md'></Image>
      <Image src={logo} alt='logo' className='border-0 rounded-full absolute top-[125px] left-16' width={60}></Image>
      <div className='flex flex-col items-start justify-center gap-8 px-4'>
        <div className='flex w-full items-center justify-between'>
            <div className='flex flex-col items-start justify-between gap-2'>
                <div className='font-semibold text-2xl'>Software Developer</div>
                <div className='flex items-center justify-center gap-2'>
                  <LocationOnIcon fontSize='small'></LocationOnIcon>
                  <div>Katunayake</div>
                </div>
            </div>
            <div className='flex flex-col items-end justify-center gap-2'>
                <div className='flex items-center justify-center gap-4'>
                    <VerifiedIcon fontSize='small' color='success' />
                    <ShareIcon fontSize='small' color='action'/>
                    <FavoriteIcon fontSize='small' color='action'/>
                </div>
                <div className='flex gap-2 items-center justify-center'>
                    <div>23/05/2023</div>
                    <div>23 applied</div>
                </div>
            </div>
        </div>
        <div>
            <div className='text-lg font-semibold'>Description</div>
            <div className='text-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate tenetur facilis ipsam deserunt ducimus, aliquam perferendis eveniet dignissimos fugiat quas accusantium! Labore impedit reiciendis illo perferendis officia ipsum ex eum?</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro explicabo delectus eveniet hic dolorum unde consequatur ea, reprehenderit totam impedit facere nisi ratione quisquam tempore praesentium quidem illo dignissimos provident.</div>
        </div>
        <div className='flex items-start justify-center flex-col '>
            <div className='font-semibold'>Requirements</div>
            <ul>
              <li>req 1</li>
              <li>req 1</li>
              <li>req 1</li>
              <li>req 1</li>
              <li>req 1</li>
            </ul>
        </div>
        <div>
            <div className='text-lg font-semibold'>Description</div>
            <div className='text-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate tenetur facilis ipsam deserunt ducimus, aliquam perferendis eveniet dignissimos fugiat quas accusantium! Labore impedit reiciendis illo perferendis officia ipsum ex eum?</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro explicabo delectus eveniet hic dolorum unde consequatur ea, reprehenderit totam impedit facere nisi ratione quisquam tempore praesentium quidem illo dignissimos provident.</div>
        </div>
      </div>
    </div>
  )
}

export default jobDescription
