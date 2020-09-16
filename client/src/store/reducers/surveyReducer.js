import { GO_TO_NEXT_PAGE, UPDATE_SURVEY, GO_TO_PREV_PAGE } from "../actions/types";

const PAGES =  [
    {id: 0, name:'type'},
    {id: 1, name:'content'},
    {id: 2, name:'questions'},
    {id: 3, name:'summary'}

];

const initialState = {
    currentPage: PAGES[0],
    survey: {
        password: false,
        limit: null,
        title: '',
        body: '',
        subject: '',
        recipients: null
    }
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
        case UPDATE_SURVEY:
            return{
                ...state,
                survey: {
                    ...action.payload
                }
            };
        default:
            return state;
    }
};

export default surveyReducer;
