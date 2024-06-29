import React from 'react'
import Navbar from "@/components/layouts/LandingPage/Navbar";
import Hero from "@/components/layouts/Hero";
import JobCardSection from '@/components/layouts/LandingPage/JobCardSection';
import Features from '@/components/layouts/LandingPage/Features';
import Testimonials from '@/components/layouts/LandingPage/Testimonials';
import FAQ from '@/components/layouts/LandingPage/FAQ';
import Footer from '@/components/layouts/Footer';
import Container from '@/components/layouts/Container';

const page = () => {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center border-2 min-w-full gap-4'>
        <Navbar></Navbar>
        <Hero></Hero>
        <JobCardSection></JobCardSection>
        <Features></Features>
        <Testimonials></Testimonials>
        <FAQ></FAQ>
        <Footer></Footer>
      </div>
    </Container>
  )
}

export default page
