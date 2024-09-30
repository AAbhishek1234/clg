import React from 'react'
import Navbar from '../component/Navbar'
import Slider from '../component/Slider'
import SelectGoal from '../component/SelectGoal'
import CollegeBaanner from '../component/CollegeBanner'
import CareerConfusion from '../component/CareerConfusion'
import Footer from '../component/Footer'
import CollegeSection from '../component/CollegeSelection'
import TopRecomandation from '../component/TopRecomandation'
import TestimonialCarousel from '../component/Testimonial'
function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Slider></Slider>
    <SelectGoal></SelectGoal>
    
    <CollegeBaanner></CollegeBaanner>
    <CareerConfusion></CareerConfusion>
    <CollegeSection></CollegeSection>
    <TopRecomandation></TopRecomandation>
    <TestimonialCarousel></TestimonialCarousel>
    <Footer></Footer>
   
    
    </>
  )
}

export default Home