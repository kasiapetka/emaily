import React, {useEffect} from 'react';
import {connect} from "react-redux";
import * as actions from "../../../store/actions";
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

const SurveyFill = props => {

    useEffect(() => {
        props.fetchSurvey(props.match.params.surveyId, props.surveyToken);
    }, [props.surveyToken]);

    const renderAnswers = () => {
        return (
            <div className="flex">
                <div className="col s12 survey-form">
                    {
                        props.survey.questions.map(({id, question, answers}, index) => {

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
    if (props.error === 401 || props.error === 400) {
        content = <SurveyFillLogin surveyId={props.match.params.surveyId}/>
    } else if (props.error === 409) {
        content = <SurveyFull/>
    } else if (props.error === 404) {
        content = <ErrorMessage/>
    } else if (props.loading || !props.survey.questions) {
        content = <Spinner/>
    } else if (!props.surveyRepliedSuccess) {
        content = <div className="bg bg-secondary">
            <div className="container">
                <div className="survey row">
                    <div className="col m8 s12">
                        <form onSubmit={props.handleSubmit((values) =>
                            props.addReply(props.match.params.surveyId, values, props.surveyToken))}>
                            <h5>Title: {props.survey.title}</h5>
                            <h6>Subject: {props.survey.subject}</h6>
                            <h6>Body: {props.survey.body}</h6>
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
}

function mapStateToProps({survey}) {
    return {
        surveyToken: survey.surveyToken,
        loading: survey.loading,
        error: survey.error,
        surveyRepliedSuccess: survey.surveyRepliedSuccess,
        survey: {
            ...survey.survey
        },
    };
}

export default reduxForm({
    form: 'surveyFill',
})(connect(mapStateToProps, actions)(connect(state => ({
    values: getFormValues('surveyFill')(state),
}))(SurveyFill)));


