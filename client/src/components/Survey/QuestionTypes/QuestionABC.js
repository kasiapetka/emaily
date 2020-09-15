import React from 'react';
import {Field, FieldArray} from "redux-form";
import SurveyField from "../SurveyForm/SurveyField/SurveyField";
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
                <button className="btn btn-small indigo darken-4"
                        onClick={() => fields.push()}>Add Answer</button>
            </div>
        </div>
    );
};

const QuestionABC = ({index, question, id, removeQuestion, fields}) => {
    return (
        <div className="row" style={{borderBottom: '1px solid #ffd740', padding: '20px 10px'}}>
            <div className="col s1"><button className="flex flex-middle btn btn-small red darken-4"
                                            style={{height:'25px', padding:'0 10px'}}
                                            onClick={()=>removeQuestion(index,fields)}>X</button></div>
            <div className="col s10">
                <p>{index + 1}. Question {id === 1 ? 'Single' : id === 2 ? 'Multiple' : ''} Answer</p>

                <Field
                    name={`${question}.question`}
                    type="text"
                    component={SurveyField}
                />
                <FieldArray name={`${question}.answers`} questionIndex={index}
                            component={renderAnswers}/>

            </div>
        </div>

    );
};

export default QuestionABC;
