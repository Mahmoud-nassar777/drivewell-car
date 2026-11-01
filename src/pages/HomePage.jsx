import React from 'react'
import HeroSection from '../sections/HeroSection'
import ServiceSection from '../sections/ServiceSection'
import EventTypeSection from '../sections/EventTypeSection'
import CTASection from '../sections/CTASection'

const HomePage = () => {
  return (
    <>
    <HeroSection />
    <ServiceSection />
    <EventTypeSection/>
    {/* Captivating CTA: 3d Experience */}
    <CTASection />
    </>
  )
}

export default HomePage