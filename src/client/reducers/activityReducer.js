import {CLONE_CAMPAIGN} from '../Actions/types';
const initialState = {
  currentCampaign: {},
  cloneFlag: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLONE_CAMPAIGN:
      return {
        ...state,
        currentCampaign: action.payload,
        cloneFlag: state.cloneFlag + 1
      };
    default:
      return state;
  }
}
