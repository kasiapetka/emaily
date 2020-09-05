import axios from 'axios';
import {FETCH_USER, CREATE_SURVEY} from "./types";

export const fetchUser = () =>
    async dispatch => {
        const res = await axios.get('/api/current_user');
        dispatch({type: FETCH_USER, payload: res.data});
    };

export const createSurvey =(survey)=>
    async dispatch => {
    console.log(survey);
        const res = await axios.post('/api/surveys',survey);
        dispatch({type: CREATE_SURVEY, payload: res.data});
    };
