import {GO_TO_NEXT_PAGE, UPDATE_SURVEY, GO_TO_PREV_PAGE} from "./types";

export const goToNextPage =()=>
    async dispatch => {
        dispatch({type: GO_TO_NEXT_PAGE});
    };

export const goToPrevPage =()=>
    async dispatch => {
        dispatch({type: GO_TO_PREV_PAGE});
    };

export const updateSurvey =(survey)=>
    async dispatch => {
        dispatch({type: UPDATE_SURVEY, payload: survey});
    };

