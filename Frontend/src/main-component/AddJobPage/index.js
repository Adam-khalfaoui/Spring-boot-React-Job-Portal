import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import AddJob from '../../components/AddJob'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const AddJobPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'AddJob Now'} pagesub={'Add Jobs'}/>
            <AddJob/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AddJobPage;
