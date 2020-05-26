import axios from 'axios';

const getAllMailerList = async () => {
  try {
    return await axios.get(`/api/v1.0/sendinblue/get_all_list`);
  } catch (err) {
    console.log('getAllMailerList -> err', err);
    return err;
  }
};

export {getAllMailerList};
