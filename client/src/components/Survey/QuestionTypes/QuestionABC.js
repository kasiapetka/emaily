import React from 'react';
import {Field, FieldArray} from "redux-form";
import SurveyField from "../SurveyForm/SurveyField/SurveyField";


const QuestionABC = ({index, question, renderAnswers, id}) => {
    return (
        <div className="row" style={{borderBottom: '1px solid #ffd740', padding: '20px 10px'}}>
            <div className="col s1"></div>
            <div className="col s10">
                <p>{index + 1} Question {id === 1 ? 'Single' : id === 2 ? 'Multiple' : ''} Answer</p>

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
