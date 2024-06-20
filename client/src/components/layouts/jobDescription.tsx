import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.png'

const jobDescription = () => {
  return (
    <div className='flex flex-col items-center justify-center w-80 border-0 rounded-lg p-8 shadow-xl gap-8 w=[600]'>
      <div>
        banner
      </div>
      <Image src={logo} alt='logo' className='border-0 rounded-full' width={50}></Image>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center'>
                <div>Job title</div>
                <div></div>
            </div>
            <div>
                <div className='flex items-center justify-center'>
                    <div>icon 1</div>
                    <div>icon 2</div>
                    <div>icon 3</div>
                </div>
                <div className='flex items-center justify-center'>
                    <div>23/05/2023</div>
                    <div># of applied</div>
                </div>
            </div>
        </div>
        <div>
            <div>Description</div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate tenetur facilis ipsam deserunt ducimus, aliquam perferendis eveniet dignissimos fugiat quas accusantium! Labore impedit reiciendis illo perferendis officia ipsum ex eum?</div>
        </div>
        <div>
            <div>requirements</div>
            <div>
                <ul>
                    <li>req 1</li>
                    <li>req 1</li>
                    <li>req 1</li>
                    <li>req 1</li>
                    <li>req 1</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default jobDescription
