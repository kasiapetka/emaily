import {ADD_QUESTION} from "../actions/types";

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
        default:
            return state;
    }
};

export default questionReducer;
