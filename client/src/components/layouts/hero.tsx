import Image from 'next/image'
import React from 'react'
import HeroImage from "../../../public/hero.png"

const hero = () => {
  return (
    <div className='flex items-start justify-center'>
      <div>
        <div className='text-4xl font-bold'>Your Step into a new career</div>
        <div className=''>
          <div className='flex items-center justify-center'>
            <div></div>
            <div></div>
          </div>
          <div>By clicking Continue to join or Sign In, you agree to Recruitwise’s User Agreement, Privacy Policy and Cookie Policy</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <Image src={HeroImage} alt=''></Image>
      </div>
    </div>
  )
}

export default hero
