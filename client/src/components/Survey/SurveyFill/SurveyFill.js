import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from "../../../store/actions";
import {FieldArray, getFormValues, reduxForm} from "redux-form";
import AnswerOpen from "./AnswerTypes/AnswerOpen";
import AnswerABC from "./AnswerTypes/AnswerABC";
import AnswerDropdown from "./AnswerTypes/AnswerDropdown";
import Spinner from "../../UI/Spinner/Spinner";
import {RiCheckFill} from "react-icons/ri";

class SurveyFill extends Component {

    componentDidMount() {
        this.props.fetchSurvey(this.props.match.params.surveyId);
        console.log(this.props.survey)
    }

    renderAnswers = () => {
        return (
            <div className="flex">
                <div className="col s12 survey-form">
                    {
                        this.props.survey.questions.map(({id, question, answers}, index) => {

                            switch (id) {
                                case 0:
                                    return <AnswerOpen key={index} index={index}
                                                       question={question}
                                    />;
                                case 1:
                                    return <AnswerABC key={index} questionIndex={index}
                                                      answers={answers}
                                                      id={1}
                                                      values={this.props.values}
                                                      question={question}
                                    />;
                                case 2:
                                    return <AnswerABC key={index} questionIndex={index}
                                                      answers={answers}
                                                      id={2}
                                                      values={this.props.values}
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


    render() {
        let content = <Spinner/>;
        if (this.props.survey.questions) {
            content = <div className="bg bg-secondary">
                <div className="container">
                    <div className="survey row">
                        <div className="col m8 s12">
                            <form onSubmit={this.props.handleSubmit((values) => console.log(values))}>
                                <h5>Title: {this.props.survey.title}</h5>
                                <h6>Subject: {this.props.survey.subject}</h6>
                                <h6>Body: {this.props.survey.body}</h6>
                                {this.renderAnswers()}
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
        }
        return (
            <div>
                {content}
            </div>
        );
    }
}

function mapStateToProps({survey}) {
    return {
        survey: {
            ...survey.survey
        }
    };
}
SurveyFill = connect(state => ({
    values: getFormValues('surveyFill')(state),
}))(SurveyFill);

export default reduxForm({
    form: 'surveyFill',
})(connect(mapStateToProps, actions)(SurveyFill));


