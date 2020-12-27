import {initStore} from "./store";

const PAGES = [
    {id: 0, name: 'type'},
    {id: 1, name: 'content'},
    {id: 2, name: 'questions'},
    {id: 3, name: 'summary'}

];

const initialState = {
    currentPage: PAGES[0],
    survey: null,
    surveys: null,
    replies: null,
    error: null,
    loading: false,
    surveyCreatedSuccess: false,
    surveyRepliedSuccess: false,
    surveyCreatedURL: null
};

export const configureStore = () => {
    const actions = {
        GO_TO_NEXT_PAGE: (state, payload) => {
            return {
                ...state,
                currentPage: PAGES[state.currentPage.id + 1]
            }
        },
        GO_TO_PREV_PAGE: (state, payload) => {
            return {
                ...state,
                currentPage: PAGES[state.currentPage.id - 1]
            }
        },
        FETCH_SURVEY: (state, payload) => {
            return {
                ...state,
                survey: {
                    ...payload,
                },
                surveyRepliedSuccess: false,
                loading: false,
            }
        },
        FETCH_SURVEYS: (state, payload) => {
            return {
                ...state,
                surveys: [
                    ...payload,
                ],
                loading: false,
            }
        },
        FETCH_REPLIES: (state, payload) => {
            return {
                ...state,
                replies: [
                    ...payload
                ],
                loading: false,
            }
        },
        CREATE_INIT: (state, payload) => {
            return {
                ...state,
                surveyCreatedSuccess: false,
                currentPage: PAGES[0],
                error: null,
            }
        },
        CREATE_SURVEY: (state, payload) => {
            return {
                ...state,
                loading: false,
                surveyCreatedSuccess: true,
                surveyCreatedURL: payload.URL,
                surveyCreatedPass: payload.password,
                currentPage: PAGES[0]
            }
        },
        DELETE_SURVEY: (state, payload) => {
            return {
                ...state,
                loading: false,
                surveys: [
                    ...payload,
                ],
            }
        },
        SURVEY_FILL_LOGIN: (state, token) => {
            return {
                ...state,
                surveyToken: token,
                error: null,
                loading: false
            }
        },
        ADD_REPLY: (state, payload) => {
            return {
                ...state,
                loading: false,
                error: null,
                surveyRepliedSuccess: true
            }
        },
        LOADING_START: (state, payload) => {
            return {
                ...state,
                loading: true
            }
        },
        SURVEY_FAILED: (state, error) => {
            return {
                ...state,
                error: error,
                loading: false
            }
        }
    };

    initStore(actions, initialState);
};
