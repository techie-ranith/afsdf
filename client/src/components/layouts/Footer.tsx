import React from 'react'
import Image from 'next/image'

import logo from '../../../public/logo.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
type Props = {}

const Footer = (props: Props) => {
  return (
      <div className="flex flex-col sm:flex-row items-center justify-center p-6 font-inter gap-16">
        <div className="flex flex-col justify-center sm:items-start items-center gap-6 flex-1">
          <div className="flex flex-col items-center justify-center">
            <Image src={logo} alt="balck logo" className='' width={100}></Image>
          </div>
          <div className="sm:w-2/3 sm:text-left text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
            est leo.
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center gap-4">
          <div>
            <a href="">Home</a>
          </div>
          <div>
            <a href="">Episodes</a>
          </div>
          <div>
            <a href="">About</a>
          </div>
        </div>
        <div className="flex flex-col flex-1 sm:items-end items-center justify-center gap-4">
          {/* <div>
            <Image src={logo} alt="foss_logo"></Image>
          </div> */}
          <div>Follow us on</div>
          <div className="flex gap-2">
            <LinkedInIcon></LinkedInIcon>
            <InstagramIcon></InstagramIcon>
            <FacebookIcon></FacebookIcon>
          </div>
        </div>
      </div>
  )
}

export default Footer
