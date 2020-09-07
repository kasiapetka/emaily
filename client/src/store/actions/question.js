import {ADD_QUESTION} from "./types";

export const addQuestion =(question)=>
    async dispatch => {
        dispatch({type: ADD_QUESTION, question: question});
    };
