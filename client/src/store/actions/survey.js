import {
    GO_TO_NEXT_PAGE,
    GO_TO_PREV_PAGE,
    CREATE_SURVEY,
    FETCH_SURVEY,
    ADD_REPLY,
    SURVEY_FAILED,
    LOADING_START,
    CREATE_INIT
} from "./types";

import axios from "axios";

export const goToNextPage =()=>
    async dispatch => {
        dispatch({type: GO_TO_NEXT_PAGE});
    };

export const goToPrevPage =()=>
    async dispatch => {
        dispatch({type: GO_TO_PREV_PAGE});
    };

export const createInit = () =>
    async dispatch => {
        dispatch({type: CREATE_INIT});
    };

export const fetchSurvey =(id)=>
    async dispatch => {
        try {
            const res = await axios.get('/api/surveys/'+id);
            dispatch({type: FETCH_SURVEY, payload: res.data});
        } catch (error) {
            dispatch({type: SURVEY_FAILED, error: error});
        }
    };

export const createSurvey =(values)=>
    async dispatch => {
        dispatch({type: LOADING_START});
        try {
            const res = await axios.post('/api/surveys', values);
            dispatch({type: CREATE_SURVEY, payload: res});
        } catch (error) {
            dispatch({type: SURVEY_FAILED, error: error});
        }
    };

export const addReply =(surveyURL,answers)=>
    async dispatch => {
        dispatch({type: LOADING_START});
        try {
            const res = await axios.post('/api/surveys/'+surveyURL, answers);
            dispatch({type: ADD_REPLY, payload: res});
        } catch (error) {
            dispatch({type: SURVEY_FAILED, error: error});
        }
    };

