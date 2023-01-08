import axios from 'axios';

const AUTHENTICATE_API_BASE_URL = "http://localhost:8089/SpringMVC/api/auth";

class authenticationService {



    signin(user){
        return axios.post(AUTHENTICATE_API_BASE_URL+ '/signin', user);
    }

    signup(user){
        return axios.post(AUTHENTICATE_API_BASE_URL+ '/signup',user);
    }


} export default new authenticationService()

