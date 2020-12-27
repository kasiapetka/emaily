import React, {useEffect} from 'react';
import SurveyFormFirstPage from "./SurveyFormFirstPage";
import SurveyFormSecondPage from "./SurveyFormSecondPage";
import SurveyFormThirdPage from "./SurveyFormThirdPage";
import SurveyFormLastPage from "./SurveyFormLastPage";
import Spinner from "../../UI/Spinner/Spinner";
import ErrorMessage from "../../ErrorMessage";
import {useStore} from "../../../hooks-store/store";
import {
    GO_TO_NEXT_PAGE,
    GO_TO_PREV_PAGE,
    CREATE_INIT,
    CREATE_SURVEY,
    LOADING_START, SURVEY_FAILED
} from "../../../hooks-store/types";
import axios from "axios";

const SurveyForm = () => {
    const state = useStore()[0];
    const dispatch = useStore()[1];

    useEffect(() => {
        dispatch(CREATE_INIT);
    }, []);

    const onSubmit = async (values) => {
        dispatch(LOADING_START);
        try {
            const res = await axios.post('/api/surveys', values);
            dispatch(CREATE_SURVEY, res.data);
        } catch (error) {
            dispatch(SURVEY_FAILED, error.response.status);
        }
    };

    const renderStep = () => {
        switch (state.currentPage?.id) {
            case 0:
                return <SurveyFormFirstPage onSubmit={() => dispatch(GO_TO_NEXT_PAGE)}/>;
            case 1:
                return <SurveyFormSecondPage previousPage={() => dispatch(GO_TO_PREV_PAGE)}
                                             onSubmit={() => dispatch(GO_TO_NEXT_PAGE)}/>;
            case 2:
                return <SurveyFormThirdPage previousPage={() => dispatch(GO_TO_PREV_PAGE)}
                                            onSubmit={() => dispatch(GO_TO_NEXT_PAGE)}/>;
            case 3:
                return <SurveyFormLastPage previousPage={() => dispatch(GO_TO_PREV_PAGE)}
                                           onSubmit={onSubmit}/>;
            default:
                return <ErrorMessage/>
        }
    };

    let content;
    if (state.error) {
        content = <ErrorMessage/>;
    } else if (state.loading) {
        content = <Spinner/>;
    } else {
        content = renderStep();
    }
    return (
        <div>
            {content}
        </div>
    );
};

export default SurveyForm;

