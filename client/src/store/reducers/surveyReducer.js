import { GO_TO_NEXT_PAGE, GO_TO_PREV_PAGE, CREATE_SURVEY, FETCH_SURVEY, ADD_REPLY } from "../actions/types";

const PAGES =  [
    {id: 0, name:'type'},
    {id: 1, name:'content'},
    {id: 2, name:'questions'},
    {id: 3, name:'summary'}

];

const initialState = {
    currentPage: PAGES[0],
    survey: null
};

const surveyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GO_TO_NEXT_PAGE:
            return{
            ...state,
                currentPage: PAGES[state.currentPage.id + 1]
        };
        case GO_TO_PREV_PAGE:
            return{
                ...state,
                currentPage: PAGES[state.currentPage.id - 1]
            };
        case FETCH_SURVEY:
            return{
                ...state,
                survey: {
                    ...action.payload
                }
            };
        case CREATE_SURVEY:
            return{
                ...state
            };
        case ADD_REPLY:
            return{
                ...state
            };
        default:
            return state;
    }
};

export default surveyReducer;
