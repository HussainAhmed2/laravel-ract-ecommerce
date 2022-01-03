import axios from 'axios';


//const url = "http://sb-test-env.eba-idzjpjus.us-west-2.elasticbeanstalk.com";
const url = process.env.MIX_APP_URL || '';

const route_endpoint = "api";


const apiclient = axios.create({
    baseURL: url + "" + route_endpoint,
    timeout: 15000,
    //headers: {'X-Custom-Header': 'foobar'}
  });

export default apiclient;
