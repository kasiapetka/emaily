import {GO_TO_NEXT_PAGE, GO_TO_PREV_PAGE, CREATE_SURVEY, FETCH_SURVEY, ADD_REPLY} from "./types";
import axios from "axios";

export const goToNextPage =()=>
    async dispatch => {
        dispatch({type: GO_TO_NEXT_PAGE});
    };

export const goToPrevPage =()=>
    async dispatch => {
        dispatch({type: GO_TO_PREV_PAGE});
    };

export const fetchSurvey =(id)=>
    async dispatch => {
        const res = await axios.get('/api/surveys/'+id);
        console.log(res.data);
        dispatch({type: FETCH_SURVEY, payload: res.data});
    };

export const createSurvey =(values)=>
    async dispatch => {
        const res = await axios.post('/api/surveys', values);
        dispatch({type: CREATE_SURVEY, payload: res});
    };

export const addReply =(surveyURL,answers)=>
    async dispatch => {
        const res = await axios.post('/api/surveys/'+surveyURL, answers);
        dispatch({type: ADD_REPLY, payload: res});
    };

