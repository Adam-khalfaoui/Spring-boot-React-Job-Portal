import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Jobs  from '../../components/Jobs'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const JobsPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Latest Jobs'} pagesub={'Jobs'}/>
            <Jobs/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default JobsPage;

