import {combineReducers} from 'redux';
import CampaignReducer from './activityReducer';
export default combineReducers({
  campaign: CampaignReducer
});
