import React from 'react';
import axios from 'axios';
const fetchData = async (values) => {
  try {
    return await axios.get(`/api/v1.0/sendinblue/get_campaigns`);
  } catch (err) {
    console.log('createCampaign -> err', err);
    return err;
  }
};

export {fetchData};
