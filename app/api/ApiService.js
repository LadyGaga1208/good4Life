import axios from 'axios';

export const url = 'http://202.191.56.103:5588/local-server/';

export default axios.create({
    baseURL: url
});

