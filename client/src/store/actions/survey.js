import {GO_TO_NEXT_PAGE, GO_TO_PREV_PAGE, CREATE_SURVEY} from "./types";
import axios from "axios";

export const goToNextPage =()=>
    async dispatch => {
        dispatch({type: GO_TO_NEXT_PAGE});
    };

export const goToPrevPage =()=>
    async dispatch => {
        dispatch({type: GO_TO_PREV_PAGE});
    };

export const createSurvey =(values)=>
    async dispatch => {
        const res = await axios.post('/api/surveys', values);
        dispatch({type: CREATE_SURVEY, payload: res});
    };
