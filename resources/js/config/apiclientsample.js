import axios from 'axios';


const url = process.env.MIX_REST_SAMPLE_URL || '';
console.log('rest sample url', url)
const route_endpoint = "api";

const apiclientSample = axios.create({
    baseURL: url + "" + route_endpoint,
    timeout: 15000,
    //headers: {'X-Custom-Header': 'foobar'}
  });

export default apiclientSample;
