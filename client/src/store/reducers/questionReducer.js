import {ADD_QUESTION, ADD_ANSWER, REMOVE_QUESTION, REMOVE_ANSWER} from "../actions/types";
import index from "./index";

const initialState = {
   questions: []
};

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUESTION:
            const newQuestions = state.questions.concat(action.question);
            return{
                ...state,
                questions: newQuestions
            };
        case ADD_ANSWER:
            const newAnswers = state.questions[action.index].answers.concat(action.answer);
            const questions = [...state.questions];
            questions[action.index] = { ...questions[action.index], answers: newAnswers };
            return{
                ...state,
                questions: questions
            };
        case REMOVE_QUESTION:
            const updatedQuestions = state.questions.filter((q,index) => index !== action.questionIndex);
            return{
                ...state,
                questions: updatedQuestions
            };
        case REMOVE_ANSWER:
            const updatedAnswers = state.questions[action.questionIndex].filter((a,index) => index !== action.answerIndex);
            const questionsUpdatedAnswers = [...state.questions];
            questionsUpdatedAnswers[action.questionIndex] = { ...questionsUpdatedAnswers[action.questionIndex], answers: updatedAnswers };
            return{
                ...state,
                questions: questionsUpdatedAnswers
            };
        default:
            return state;
    }
};

export default questionReducer;
