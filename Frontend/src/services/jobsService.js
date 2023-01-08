import axios from "axios";
const JOBS_BASE_URL = "http://localhost:8089/SpringMVC/job";

class jobsService {



    addJob(job){
        return axios.post(JOBS_BASE_URL+ '/add', job, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        });
    }

    allJobs(){
        return axios.get(JOBS_BASE_URL+'/all');
    }

    findById(id){
        return axios.get(JOBS_BASE_URL+'/find/'+id);
    }

    applyToJob(job,id){

        return axios.post(JOBS_BASE_URL+'/applyToJob/'+id ,job ,{
            headers: {

                'Authorization': `Bearer ${localStorage.getItem('token')}`,

            },
        });
    }
    Upload(file){
        let formData = new FormData();

        formData.append("file", file);
        return axios.post(JOBS_BASE_URL+'/uploadFile/',formData,{
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
    }

    addview(id){

        return axios.post(JOBS_BASE_URL+'/addview/'+id,{
            headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    });
    }

} export default new jobsService()

