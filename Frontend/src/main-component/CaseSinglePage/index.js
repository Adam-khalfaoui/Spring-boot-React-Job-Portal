import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import CaseSingle from '../../components/CaseSingle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const CaseSinglePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Single Causes'} pagesub={'Ensure Education for every poor children'}/> 
            <CaseSingle/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CaseSinglePage;
