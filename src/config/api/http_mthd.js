import axios from 'axios';
import {GetDataFromStorage} from '../functions';

axios.interceptors.request.use(async (config) => {
  if (config) {
    let token = await GetDataFromStorage('token');
    //console.log(token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export const GetFunc = (path) => {
  return new Promise((resolve, reject) => {
    axios
      .get(path)
      .then(({data}) => {
        return resolve(data);
      })
      .catch(({...error}) => {
        return error.response
          ? reject(error.response.data)
          : reject('Network error');
      });
  });
};

export const DelFunc = (path) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(path)
      .then(({data}) => {
        return resolve(data);
      })
      .catch(({...error}) => {
        return error.response
          ? reject(error.response.data)
          : reject('Network error');
      });
  });
};

export const PostFunc = (path, payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(path, payload)
      .then(({data}) => {
        return resolve(data);
      })
      .catch(({...error}) => {
        return error.response
          ? reject(error.response.data)
          : reject('Network error');
      });
  });
};

export const PutFunc = (path, payload) => {
  return new Promise((resolve, reject) => {
    axios
      .put(path, payload)
      .then(({data}) => {
        return resolve(data);
      })
      .catch(({...error}) => {
        return error.response
          ? reject(error.response.data)
          : reject('Network error');
      });
  });
};
