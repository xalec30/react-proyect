import axios from "axios";

const codeigniter = axios.create({
    'baseURL': 'http://ec2-18-191-66-28.us-east-2.compute.amazonaws.com/index.php/api/v1',
    'headers' : { 
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': "X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method",
        'Access-Control-Allow-Methods' :'GET, POST PUT, DELETE',
    }
});

export default codeigniter;