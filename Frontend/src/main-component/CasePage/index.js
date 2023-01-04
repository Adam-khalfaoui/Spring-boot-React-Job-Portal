import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Causes from '../../components/Causes'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const CausePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Our Causes'} pagesub={'Causes'}/> 
            <Causes/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CausePage;
