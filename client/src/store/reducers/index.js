import {combineReducers} from "redux";
import authReducer from "./authReducer";
import {reducer as formReducer} from "redux-form";
import surveyReducer from './surveyReducer';
import questionReducer from "./questionReducer";

export default combineReducers({
   auth: authReducer,
   form: formReducer,
   survey: surveyReducer,
   question: questionReducer
});
