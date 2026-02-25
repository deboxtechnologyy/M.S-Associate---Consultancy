import React from 'react'
import HeroSection from './Banner'
import WelcomeSection from './WelcomeSection'
import ServicesSection from './Service'
import ExpertiseSection from './OurExpertise'
import ProcessSection from './Process'
import StatsSection from './StatsSection'
import TestimonialsSection from './Testimonal'
import CTASection from './CTA'
import WhyChooseUs from './WhyChoose'

const Home = () => {
  return (
    <div>
    <HeroSection/>
    <WelcomeSection/>
    <StatsSection/>
    <ServicesSection/>
    <ExpertiseSection/>
    <ProcessSection/>
    <WhyChooseUs/>
    
    <CTASection/>
    <TestimonialsSection/>
      
    </div>
  )
}

export default Home
