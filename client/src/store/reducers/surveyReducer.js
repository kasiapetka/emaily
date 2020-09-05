import { GO_TO_NEXT_STEP } from "../actions/types";

const STEPS =  [
    {id: 0, name:'type'},
    {id: 1, name:'content'},
    {id: 2, name:'summary'}
];

const initialState = {
    currentStep: STEPS[0]
};

const surveyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GO_TO_NEXT_STEP:
            return{
            ...state,
            currentStep: STEPS[state.currentStep.id + 1]
        };
        default:
            return state;
    }
};

export default surveyReducer;
