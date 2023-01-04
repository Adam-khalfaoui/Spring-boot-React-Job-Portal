import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import Hero2 from '../../components/hero2'
import About2 from '../../components/about2'
import Features2 from '../../components/Features2'
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
            <Navbar2/>
            <Hero2/>
            <About2/>
            <Features2/>
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