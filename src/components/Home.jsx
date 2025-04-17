import React from 'react';
import Navber from './Navbar';
import Footer from './Footer';   
import Testimonial from './Testimonial';
import Faq from './Faq';
import PartnerLogo from './PartnerLogo';
import Hero from './Hero';


const Home = () => {
  return (
    <div>
        <Navber />
        <Hero />
        <PartnerLogo />
        <Testimonial />
        <Faq />
        <Footer />
    </div>
  )
}

export default Home