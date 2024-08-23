import React from 'react'
import Survey from '@/components/layouts/LandingPage/Survey';
import Navbar from "@/components/layouts/LandingPage/Navbar";
import Hero from "@/components/layouts/LandingPage/hero";
import JobCardSection from '@/components/layouts/LandingPage/JobCardSection';
import Features from '@/components/layouts/LandingPage/Features';
import Testimonials from '@/components/layouts/LandingPage/Testimonials';
import FAQ from '@/components/layouts/LandingPage/FAQ';
import Footer from '@/components/layouts/LandingPage/Footer';
import Container from '@/components/layouts/LandingPage/Container';
import CommonSearchFilter from '@/components/layouts/cards/CommonSearchFilter';
import SearchComponent from '@/components/layouts/cards/SearchComponent';

const page = () => {
  return (
    <>
      <Survey />
      <Navbar />
      <Container>
        <div className='flex flex-col items-center justify-center min-w-full gap-14 mb-10'>
          <Hero />
          <SearchComponent></SearchComponent>
          <JobCardSection></JobCardSection>
          <Features></Features>
          <Testimonials></Testimonials>
          <FAQ></FAQ>
        </div>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default page
