import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import { login } from './actions/login'

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'https://conduit.productionready.io/api';
const responseBody = res => res.body;
let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
}
const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};
// const requestsAsync = {
//   post: new Promise((res, rej) => {
//     fetch('https://conduit.productionready.io/api/users/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         'user': { 'email': 'demon5@gmail.com', 'password': '12345678' }
//       })
//     }).then(
//       response => response.json(),
//       error => console.log('An error occurred.', error),
//     ).then((json) => {      
//       res(json);
//     });
//   })
// };
const requestsAsync = {
  post: ()=>{
    return new Promise((res, rej) => {
      fetch('https://conduit.productionready.io/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'user': { 'email': 'demon5@gmail.com', 'password': '12345678' }
        })
      }).then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      ).then((json) => {      
        res(json);
      });
    })
  }
};
const someFunction = (username, password) => {
  return new Promise((res, rej) => {
    fetch('https://conduit.productionready.io/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'user': { 'email': 'demon5@gmail.com', 'password': '12345678' }
      })
    }).then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    ).then((json) => {      
      res(json);
    });
  });
};
let prom = new Promise((res, rej) => {
  fetch('https://conduit.productionready.io/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'user': { 'email': 'demon5@gmail.com', 'password': '12345678' }
      })
    }).then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    ).then((json) => {
      debugger
      res(json);
    });
})
const Auth = {
  current: () =>
    requests.get('/user'),
  login: (email, password) => (dispatch) => {
    someFunction('q','b').then(response=> {dispatch(login(response))});
    // prom.then((response) => {
    //   dispatch(login(response));
    // });
    
  },
  register: (username, email, password) =>
    requests.post('/users', { user: { username, email, password } }),
  save: user =>
    requests.put('/user', { user })
};
const fetchPosts = (email, password) => (dispatch) => {
  return fetch('https://conduit.productionready.io/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'user': { 'email': email, 'password': password }
    })
  }).then(
    response => response.json(),
    error => console.log('An error occurred.', error),
  ).then((json) => {
    dispatch(login(json));
  });
}
export default {
  Auth, fetchPosts,
  setToken: _token => { token = _token; }
};
