/* eslint-disable no-console */
import React, {Component} from 'react';
import Router from '../routes';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';
import {toast} from 'react-toastify';

// Add a request interceptor
axios.interceptors.request.use(
  async (config) => {
    config.headers['api-key'] =
      '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';
    return config;
  },
  (error) => {
    // Do something with request error
    toast.error('Something Went Wrong');
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log('error', error);
    // handleGlobalError(error);

    //TO_DO: refractor this method
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.message &&
      error.response.data.message.message
    ) {
      toast.error(error.response.data.message.message);
    }
    return Promise.reject(error);
  }
);
class MainContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Router />
        <Footer />
      </React.Fragment>
    );
  }
}

export default MainContainer;
