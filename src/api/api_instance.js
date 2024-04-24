import axios from 'axios';

const instance = axios.create({
   baseURL: "http://172.22.11.131:4000",  
   headers: {
   
  },
});

export default instance;