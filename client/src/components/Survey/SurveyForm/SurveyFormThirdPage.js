import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import * as actions from "../../../store/actions";
import {RiCheckFill} from "react-icons/ri";
import QuestionABC from "../QuestionTypes/QuestionABC";
import QuestionOpen from "../QuestionTypes/QuestionOpen";
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

    renderQuestionTypes = (fields) => {
        return (
            <div className="flex flex-column questions">
                <p>Add questions to Your survey:</p>
                {
                    QUESTION_TYPES.map(({label, id, name}) =>
                        <button key={id}
                                onClick={() => fields.push({id: id})}
                                className="waves-effect waves-light btn amber darken-1">
                            <h6>{label}</h6>
                        </button>)
                }
            </div>
        );
    };

    removeQuestion=(index,fields)=>{
        fields.remove(index);
       // this.props.removeQuestion(index);
    };

    renderQuestions = ({fields, meta: {error, submitFailed}}) => {
        return (

            <div className="flex">
                <div className="col m8 s12 survey-form">
                {
                    fields.map((question, index) => {

                        switch (fields.getAll()[index].id) {
                            case 0:
                                return <QuestionOpen key={index} index={index}
                                                     fields={fields}
                                                     question={question}
                                                     removeQuestion={this.removeQuestion}/>;
                            case 1:
                                return <QuestionABC key={index} index={index}
                                                            id={1}
                                                          question={question}
                                                          renderAnswers={this.renderAnswers}/>;
                            case 2:
                                return <QuestionABC key={index} index={index}
                                                    id={2}
                                                          question={question}
                                                          renderAnswers={this.renderAnswers}/>;
                            case 3:
                                return <QuestionDropdown key={index} index={index} question={question}/>;
                        }
                    })
                }
                </div>
                <div className="col m4 s12">
                    {this.renderQuestionTypes(fields)}
                </div>
            </div>
        );
    };

    renderAnswers = ({fields, meta: {error, submitFailed}, questionIndex}) => {
        return (
            <div className="flex flex-column row">
                <div className="col s12">
                    {
                        fields.map((answer, index) =>
                            <AnswerField
                                key={index}
                                index={index}
                                answer={answer}
                                questionIndex={questionIndex}/>)
                    }
                </div>
                <div className="col m4 offset-m4 s12 center">
                <button className="btn btn-small indigo darken-4" onClick={()=>fields.push()}>Add Answer</button>
            </div>
            </div>
        );
    };

    render() {
        return (
            <div className="bg bg-secondary">
                <div className="container">
                    <div className="survey row">
                            <form onSubmit={this.props.handleSubmit((values) => this.props.onSubmit(values))}>
                                <FieldArray name="questions" component={this.renderQuestions}/>
                                <div className="flex flex-justify-between buttons">
                                    <button onClick={this.props.previousPage} className="btn large red darken-4">Back
                                    </button>
                                    <button type="submit" className="btn large indigo darken-4">Next <RiCheckFill/>
                                    </button>
                                </div>
                            </form>
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
