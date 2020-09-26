import {
    GO_TO_NEXT_PAGE,
    GO_TO_PREV_PAGE,
    CREATE_SURVEY,
    FETCH_SURVEY,
    ADD_REPLY,
    SURVEY_FAILED,
    LOADING_START,
    CREATE_INIT,
    ADD_INIT
} from "../actions/types";

const PAGES =  [
    {id: 0, name:'type'},
    {id: 1, name:'content'},
    {id: 2, name:'questions'},
    {id: 3, name:'summary'}

];

const initialState = {
    currentPage: PAGES[0],
    survey: null,
    error: null,
    loading: false,
    surveyCreatedSuccess: false,
    surveyRepliedSuccess: false,
    surveyCreatedURL: null
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
                    ...action.payload,
                },
                surveyRepliedSuccess: false,
                loading: false
            };
        case CREATE_INIT:
            return{
                ...state,
                surveyCreatedSuccess: false,
                currentPage: PAGES[0]
            };
        case CREATE_SURVEY:
            return{
                ...state,
                loading: false,
                surveyCreatedSuccess: true,
                surveyCreatedURL: action.payload,
                currentPage: PAGES[0]
            };
        case ADD_REPLY:
            return{
                ...state,
                loading: false,
                surveyRepliedSuccess: true
            };
        case LOADING_START:
            return{
                ...state,
                loading: true
            };
        case SURVEY_FAILED:
            console.log('dfsdfsfs')
            return{
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
};

export default surveyReducer;
