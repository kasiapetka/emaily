import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getFormValues, reduxForm} from "redux-form";
import AnswerOpen from "./AnswerTypes/AnswerOpen";
import AnswerABC from "./AnswerTypes/AnswerABC";
import AnswerDropdown from "./AnswerTypes/AnswerDropdown";
import Spinner from "../../UI/Spinner/Spinner";
import {RiCheckFill} from "react-icons/ri";
import SurveyFormSuccess from "../SurveyForm/SurveyFormSuccess";
import SurveyFillLogin from "./SurveyFillLogin/SurveyFillLogin";
import SurveyFull from "./SurveyFull";
import ErrorMessage from "../../ErrorMessage";
import {useStore} from "../../../hooks-store/store";
import {
    ADD_REPLY, FETCH_SURVEY, LOADING_START, SURVEY_FAILED
} from "../../../hooks-store/types";
import axios from "axios";

const SurveyFill = props => {
    const state = useStore()[0];
    const dispatch = useStore()[1];

    const addReply = async (surveyURL, answers, surveyToken) => {
            dispatch(LOADING_START);
            try {
                let headers;
                if (surveyToken) {
                    headers = {
                        token: surveyToken
                    }
                }
                const res = await axios.post('/api/surveys/reply/' + surveyURL, answers, {headers: headers});
                dispatch(ADD_REPLY, res);
            } catch (error) {
                dispatch(SURVEY_FAILED, error.message);
            }
        };

    useEffect(() => {
        const fetchSurvey = async (id, surveyToken) => {
            dispatch(LOADING_START);
            try {
                let headers;
                if (surveyToken) {
                    headers = {
                        token: surveyToken
                    }
                }
                const res = await axios.get('/api/surveys/' + id, {headers: headers});
                dispatch(FETCH_SURVEY, res.data);
            } catch (error) {
                dispatch(SURVEY_FAILED, error.response.status);
            }
        };
        fetchSurvey(props.match.params.surveyId, state.surveyToken);
    }, [state.surveyToken]);

    const renderAnswers = () => {
        return (
            <div className="flex">
                <div className="col s12 survey-form">
                    {
                        state.survey.questions.map(({id, question, answers}, index) => {

                            switch (id) {
                                case 0:
                                    return <AnswerOpen key={index} index={index}
                                                       question={question}
                                    />;
                                case 1:
                                    return <AnswerABC key={index} questionIndex={index}
                                                      answers={answers}
                                                      id={1}
                                                      values={props.values}
                                                      question={question}
                                    />;
                                case 2:
                                    return <AnswerABC key={index} questionIndex={index}
                                                      answers={answers}
                                                      id={2}
                                                      values={props.values}
                                                      question={question}
                                    />;
                                case 3:
                                    return <AnswerDropdown key={index} index={index}
                                                           answers={answers}
                                                           question={question}
                                    />;
                            }
                        })
                    }
                </div>
            </div>
        );
    };

    let content;
    if (state.error === 401 || state.error === 400) {
        content = <SurveyFillLogin surveyId={props.match.params.surveyId}/>
    } else if (state.error === 409) {
        content = <SurveyFull/>
    } else if (state.error === 404) {
        content = <ErrorMessage/>
    } else if (state.loading || !state.survey?.questions) {
        content = <Spinner/>
    } else if (!state.surveyRepliedSuccess) {
        content = <div className="bg bg-secondary">
            <div className="container">
                <div className="survey row">
                    <div className="col m8 s12">
                        <form onSubmit={props.handleSubmit((values) => addReply(props.match.params.surveyId, values, state.surveyToken))}>
                            <h5>Title: {state.survey.title}</h5>
                            <h6>Subject: {state.survey.subject}</h6>
                            <h6>Body: {state.survey.body}</h6>
                            {renderAnswers()}
                            <div className="flex flex-justify-between buttons">
                                <button type="submit" className="btn large indigo darken-4">Submit
                                    Survey <RiCheckFill/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    } else {
        content = <SurveyFormSuccess/>;
    }
    return (
        <div>
            {content}
        </div>
    );
};

export default reduxForm({
    form: 'surveyFill',
})(connect(state => ({
    values: getFormValues('surveyFill')(state),
}))(SurveyFill));


