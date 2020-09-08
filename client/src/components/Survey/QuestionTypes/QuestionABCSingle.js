import React from 'react';
import {Field, FieldArray} from "redux-form";
import SurveyField from "../SurveyForm/SurveyField/SurveyField";


const QuestionAbcSingle =({index, addAnswer, questions, renderAnswers})=> {
    return (
        <div className="row" style={{borderBottom: '1px solid #ffd740', padding: '20px 10px'}}>
            <div className="col s1"></div>
            <div className="col s10">
                <p>{index+1} Question Single Answer</p>

                <Field
                    name={'questions['+index+'].question'}
                    type="text"
                    component={SurveyField}
                />
                <FieldArray name={'questions['+index+'].answers'} questionIndex={index}
                            component={renderAnswers} fields={Object.values(questions[index].answers)}/>
             <button className="btn btn-small indigo darken-4" onClick={()=>addAnswer(index,'')}>Add Answer</button>
            </div>
        </div>

    );
};

export default QuestionAbcSingle;
