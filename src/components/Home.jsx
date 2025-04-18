import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';   
import Testimonial from './Testimonial';
import Faq from './Faq';
import PartnerLogo from './PartnerLogo';
import Hero from './Hero';


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <PartnerLogo />
        <Testimonial />
        <Faq />
        <Footer />
    </div>
  )
}

export default Home