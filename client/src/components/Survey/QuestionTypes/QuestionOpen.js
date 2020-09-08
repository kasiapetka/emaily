import React from 'react';
import {Field} from "redux-form";
import SurveyField from "../SurveyForm/SurveyField/SurveyField";
import QuestionAbcSingle from "./QuestionABCSingle";

const QuestionOpen =({index, removeQuestion})=> {
        return (
            <div className="row" style={{borderBottom: '1px solid #ffd740', padding: '20px 10px'}}>
                <div className="col s1"></div>
                <div className="col s10">
                    <p>{index+1} Question Open</p>

                    <Field
                        name={'questions['+index+'].question'}
                        type="text"
                        component={SurveyField}
                    />
                    <Field type="text"
                           name={'questions['+index+'].answers'}
                           disabled={true}
                           placeholder="Space for an answer"
                           component={SurveyField}/>
                </div>
            </div>

        );
};

export default QuestionOpen;
//<button onClick={()=>removeQuestion(index)}>X</button>
