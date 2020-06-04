import {CHECK_SIGN_IN, GET_USERS, CLONE_CAMPAIGN} from './types';

export const checkSignIn = ({email, password}) => {
  return {
    type: CHECK_SIGN_IN,
    payload: {email, password}
  };
};

export const getUsers = () => {
  return {
    type: GET_USERS
  };
};

export const cloneCampaign = (data) => {
  return {
    type: CLONE_CAMPAIGN,
    payload: data
  };
};
