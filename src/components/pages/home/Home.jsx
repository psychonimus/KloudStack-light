import React, { useRef } from 'react'
import HeroLight from './Hero/HeroLight'
import ClientLogos from './ClientLogos/ClientLogos'
import OurServicesLight from './OurServices/OurServicesLight'
import WhyKloudStack from './WhyKloudStack/WhyKloudStack'
import WhyKloudstackLight from './WhyKloudStack/WhyKloudstackLight'
import CapabilitiesLight from './Capabilities/CapabilitiesLight'
import AllianceEcosystem from './AllianceEcosystem/AllianceEcosystem'
import Testimonial from './Testimonials/TestimonialsModern'
import ImageAccordion from './ImageAccordion/ImageAccordion'
import useScrollReveal from '../../../hooks/useScrollReveal'
import InteractiveLinks from './InteractiveLinks/InteractiveLinks'
import FeatureTabs from './FeatureTabs/FeatureTabs'

const Home = () => {
  const homeRef = useRef(null)
  useScrollReveal(homeRef)

  return (
    <div ref={homeRef}>
      <HeroLight />
      <ClientLogos />
      {/* <WhyKloudstackLight /> */}

      <ImageAccordion />

      <OurServicesLight />


      <InteractiveLinks />

      {/* <WhyKloudStack /> */}
      <CapabilitiesLight />
      
      <AllianceEcosystem />
      <Testimonial />

      <FeatureTabs />


      
    </div>
  )
}

export default Home