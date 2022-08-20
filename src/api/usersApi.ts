import axios from 'axios';

const usersApi = axios.create({
  baseURL: 'https://my-fake-json-server.herokuapp.com',
});

export default usersApi;
