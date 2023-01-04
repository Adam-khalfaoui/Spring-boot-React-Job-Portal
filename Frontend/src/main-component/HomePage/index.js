import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero'
import About from '../../components/about'
import Features from '../../components/Features'
import Causes from '../../components/Causes'
import CtaSection from '../../components/cta'
import EventSection from '../../components/event'
import TeamSection from '../../components/team'
import Testimonial from '../../components/Testimonial'
import BlogSection from '../../components/BlogSection'
import Partner from '../../components/Partner'
import Footer from '../../components/footer'

import Scrollbar from '../../components/scrollbar'


const HomePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <Hero/>
            <About/>
            <Features/>
            <Causes/>
            <CtaSection/>
            <EventSection/>
            <TeamSection/>
            <Testimonial/>
            <BlogSection/>
            <Partner/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;