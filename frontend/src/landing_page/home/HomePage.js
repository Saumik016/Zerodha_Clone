import React from 'react';
import Hero from './HeroFinal';
import Award from './Award';
import Pricing from './Pricing';
import Stats from './Stats';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
function HomePage () {
    return ( 
       <>
        <Navbar />
        <Hero />
        <Award />
        <Pricing />
        <Stats />
        <Education />
        <OpenAccount />
        <Footer />
        
       </>
     );
}

export default HomePage;