import axios from 'axios';

const createMailList = async (values) => {
  try {
    return await axios.post(`/api/v1.0/sendinblue/create_mail_list`, values);
  } catch (err) {
    console.log('createMailList -> err', err);
    return err;
  }
};

export {createMailList};
