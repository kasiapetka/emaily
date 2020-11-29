import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import surveyReducer from './surveyReducer';

export default combineReducers({
   form: formReducer,
   survey: surveyReducer,
});
