import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Features from '../../components/Features'
import About2 from '../../components/about2'
import TeamSection from '../../components/team'
import Testimonial from '../../components/Testimonial'
import CounterSection from '../../components/counter'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const CasePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'}/> 
            <About2/>
            <Features/>
            <TeamSection/>
            <Testimonial/>
            <CounterSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CasePage;
