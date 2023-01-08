import React, {Fragment, useEffect, useState} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Jobs  from '../../components/Jobs'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import jobsService from "../../services/jobsService";


const JobsPage =() => {

    const [allJobs, setAllJobs] = useState([]);



    useEffect(() => {
        let mounted = true;
        jobsService.allJobs()
            .then(res => {
                if(mounted) {
                    setAllJobs(res.data)

                }
            })
        return () => mounted = false;
    }, [])

    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Latest Jobs'} pagesub={'Jobs'}/>
            {allJobs?.map((job)=>(
                <Jobs
                    {...job}
                    {...job.postedBy}
                    key={job.idJob}

                ></Jobs>
            ))}

            <Jobs/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default JobsPage;

