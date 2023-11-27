import React from 'react'
import Home, { CompaniesList } from '../component/home/Home'
import About from '../component/about/About'
import Services from '../component/services/Services'
import Testimonial from '../component/testimonial/Testimonial'
import ICTStrategy from '../component/ict-Strategy/ICT-Strategy'
import FAQ from '../component/faq/FAQ'
import LastCTA from '../component/last-CTA/Last-CTA'
import Footer from '../component/footer/Footer'
import Contact from '../component/constact/Contact'

const Hero = () => {
  return (
    <div className='scroll-smooth'>
        <Home />
      <div className="max-w-6xl mx-auto flex flex-col">
        <div>
          <CompaniesList />
          <About />
        </div>
        <div className=" flex flex-col gap-10 mx-2">
          <Services />
          <ICTStrategy />
          <Testimonial />
          <FAQ />
          <LastCTA />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default Hero