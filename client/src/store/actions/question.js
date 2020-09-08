import {ADD_QUESTION, ADD_ANSWER, REMOVE_ANSWER, REMOVE_QUESTION} from "./types";

export const addQuestion =(question)=>
    async dispatch => {
        dispatch({type: ADD_QUESTION, question: question});
    };

export const addAnswer =(index, answer)=>
    async dispatch => {
        dispatch({type: ADD_ANSWER, index: index, answer: answer});
    };
export const removeQuestion =(questionIndex)=>
    async dispatch => {
        dispatch({type: REMOVE_QUESTION, questionIndex: questionIndex});
    };

export const removeAnswer =(answerIndex, questionIndex)=>
    async dispatch => {
        dispatch({type: REMOVE_ANSWER, answerIndex: answerIndex, questionIndex: questionIndex});
    };
