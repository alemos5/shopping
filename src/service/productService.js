import axios from 'axios';

export default axios.create({
    baseURL: 'https://microservice.grant.net.ar/api'
});