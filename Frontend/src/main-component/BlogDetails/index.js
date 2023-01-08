import React, {Fragment, useEffect, useState} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import BlogSingle from '../../components/BlogDetails'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import jobsService from "../../services/jobsService";


const BlogDetails =(props) => {
    const [job,setJob] =  useState(null);
    const id = props.match.params.id;

    const username =
    console.log(id);
    jobsService.findById(id).then(res=> {
        console.log(res)
    })
   console.log('herez'+props.location.data);
   const data = (props.location.data)


    useEffect(() => {
        let mounted = true;
        jobsService.findById(id)
            .then(res => {
                if(mounted) {
                    setJob(res.data)

                }
            })
        return () => mounted = false;
    }, [])

    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/>
            <BlogSingle
                {...job}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetails;
