import React from 'react';
import {getFormValues, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {RiCheckFill} from "react-icons/ri";
import QuestionABC from "./QuestionTypes/QuestionABC";
import QuestionOpen from "./QuestionTypes/QuestionOpen";
import QuestionDropdown from "./QuestionTypes/QuestionDropdown";
import {FieldArray} from "redux-form";
import validate from './validate'

export const QUESTION_TYPES = [
    {id: 0, name: 'open', label: 'Open Question'},
    {id: 1, name: 'abcSingle', label: 'ABC Single Answer'},
    {id: 2, name: 'abcMulti', label: 'ABC Multiple Answers'},
    {id: 3, name: 'dropdown', label: 'Dropdown Question'},
];

const SurveyFormThirdPage = props => {
    const renderQuestionTypes = (fields) => {
        return (
            <div className="flex flex-column questions">
                <p>Add questions to Your survey:</p>
                {
                    QUESTION_TYPES.map(({label, id, name}) =>
                        <button key={id}
                                type="button"
                                onClick={() => fields.push({id: id})}
                                className="waves-effect waves-light btn amber darken-1">
                            <h6>{label}</h6>
                        </button>)
                }
            </div>
        );
    };

    const removeQuestion = (index, fields) => {
        fields.remove(index);
    };

    const renderQuestions = ({fields, meta: {error, submitFailed}}) => {
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
                                                         removeQuestion={removeQuestion}/>;
                                case 1:
                                    return <QuestionABC key={index} index={index}
                                                        fields={fields}
                                                        id={1}
                                                        question={question}
                                                        removeQuestion={removeQuestion}
                                    />;
                                case 2:
                                    return <QuestionABC key={index} index={index}
                                                        fields={fields}
                                                        id={2}
                                                        question={question}
                                                        removeQuestion={removeQuestion}
                                    />;
                                case 3:
                                    return <QuestionDropdown key={index} index={index}
                                                             fields={fields}
                                                             question={question}
                                                             removeQuestion={removeQuestion}
                                    />;
                            }
                        })
                    }
                </div>
                <div className="col m4 s12">
                    {renderQuestionTypes(fields)}
                </div>
            </div>
        );
    };

    return (
        <div className="bg bg-secondary">
            <div className="container">
                <div className="survey row">
                    <form onSubmit={props.handleSubmit(() => props.onSubmit())}>
                        <FieldArray name="questions" component={renderQuestions}/>
                        <div className="flex flex-justify-between buttons">
                            <button onClick={props.previousPage} className="btn large red darken-4">Back
                            </button>
                            <button type="submit" className="btn large indigo darken-4"
                                    disabled={!props.values.questions || props.values.questions.length === 0}>Next <RiCheckFill/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default reduxForm({
    form: 'surveyForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(connect(state => ({
    values: getFormValues('surveyForm')(state),
}))(SurveyFormThirdPage));
