import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import * as actions from "../../../store/actions";
import {RiCheckFill} from "react-icons/ri";
import QuestionAbcSingle from "../QuestionTypes/QuestionABCSingle";
import QuestionOpen from "../QuestionTypes/QuestionOpen";
import QuestionAbcMulti from "../QuestionTypes/QuestionABCMulti";
import QuestionDropdown from "../QuestionTypes/QuestionDropdown";
import {FieldArray} from "redux-form";
import AnswerField from "../QuestionTypes/AnswerField";

const QUESTION_TYPES = [
    {id: 0, name: 'open', label: 'Open Question'},
    {id: 1, name: 'abcSingle', label: 'ABC Single Answer'},
    {id: 2, name: 'abcMulti', label: 'ABC Multiple Answers'},
    {id: 3, name: 'dropdown', label: 'Dropdown Question'},
];

class SurveyFormThirdPage extends Component {

    addQuestion = (id) => {
        this.props.addQuestion({id: id, question: '', answers: []});
    };

    addAnswer = (index, answer) => {
        this.props.addAnswer(index, answer);
    };

    renderQuestionTypes = () => {
        return (
            <div className="flex flex-column">
                <p>Add questions to Your survey:</p>
                {
                    QUESTION_TYPES.map(({label, id, name}) =>
                        <button key={id}
                                onClick={() => this.addQuestion(id)}
                                className="waves-effect waves-light btn amber darken-1">
                            <h6>{label}</h6>
                        </button>)
                }
            </div>
        );
    };



    renderQuestions = ({fields, meta: {error, submitFailed}}) => {
        return (
            <div className="flex flex-column">
                {
                    fields.map((question, index) => {
                        switch (question.id) {
                            case 0:
                                return <QuestionOpen key={index} index={index}
                                                     removeQuestion={this.props.removeQuestion}/>;
                            case 1:
                                return <QuestionAbcSingle key={index} index={index}
                                                          addAnswer={this.addAnswer}
                                                          removeQuestion={this.props.removeQuestion}
                                                          renderAnswers={this.renderAnswers}
                                                          questions={this.props.questions}/>;
                            case 2:
                                return <QuestionAbcMulti key={index} index={index} question={question}/>;
                            case 3:
                                return <QuestionDropdown key={index} index={index} question={question}/>;
                        }
                    })
                }
            </div>
        );
    };

    renderAnswers = ({fields, meta: {error, submitFailed}, questionIndex}) => {
        return (
            <div className="flex flex-column">
                {
                    fields.map((answer, index) =>
                        <AnswerField
                            key={index}
                            index={index}
                            answer={answer}
                            questionIndex={questionIndex}/>)
                }
            </div>
        );
    };

    render() {
        return (
            <div className="bg bg-secondary">
                <div className="container">
                    <div className="survey row">
                        <div className="col m8 s12">
                            <form onSubmit={this.props.handleSubmit((values) => this.props.onSubmit(values))}>

                                <FieldArray name="questions" component={this.renderQuestions}
                                            fields={Object.values(this.props.questions)}/>
                                <div className="flex flex-justify-between buttons">
                                    <button onClick={this.props.previousPage} className="btn large red darken-4">Back
                                    </button>
                                    <button type="submit" className="btn large indigo darken-4">Next <RiCheckFill/>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col m4 s12 questions">
                            {this.renderQuestionTypes()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({question}) {
    return {
        questions: {
            ...question.questions
        }
    };
}

export default reduxForm({
    form: 'surveyForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    // validate
})(connect(mapStateToProps, actions)(SurveyFormThirdPage));
