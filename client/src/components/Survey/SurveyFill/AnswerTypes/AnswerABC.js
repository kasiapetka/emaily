import React from 'react';
import {Field, FieldArray} from "redux-form";
import AnswerField from "./AnswerField";

const renderAnswers = ({fields, meta: {error, submitFailed}, questionIndex}) => {
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
                <button type="button" className="btn btn-small indigo darken-4"
                        onClick={() => fields.push()}>Add Answer</button>
            </div>
        </div>
    );
};

const AnswerABC = ({index, question, id, removeQuestion, fields}) => {
    return (
        <div className="row question">
            AnswerABC
        </div>

    );
};

export default AnswerABC;
