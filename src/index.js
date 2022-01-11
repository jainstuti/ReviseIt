import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import store from './store';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import "./index.css";
import axios from 'axios';

// const API = axios.create({ baseURL: "http://localhost:5000" });
// API.interceptors.request.use((req) => {
//   console.log("inside interceptor");
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("profile")).token
//     }`;
//   }

//   return req;
// });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
