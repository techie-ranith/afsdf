import React from 'react'
import Survey from '@/components/layouts/LandingPage/Survey';
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
    <div>
      <Survey></Survey>
      <Navbar></Navbar>
      <Container>
        <div className='flex flex-col items-center justify-center min-w-full gap-14'>
          <Hero></Hero>
          <JobCardSection></JobCardSection>
          <Features></Features>
          <Testimonials></Testimonials>
          <FAQ></FAQ>
          <Footer></Footer>
        </div>
      </Container>
    </div>
  )
}

export default page
