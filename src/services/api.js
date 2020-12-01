import axios from 'axios';

const api = axios.create({
    baseURL:'https://api.github.com/search/repositories?q=language:Java&sort=stars&page=1'
});

export default api;