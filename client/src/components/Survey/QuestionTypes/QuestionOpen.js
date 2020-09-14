import React from 'react';
import {Field} from "redux-form";
import SurveyField from "../SurveyForm/SurveyField/SurveyField";
import QuestionABC from "./QuestionABC";

const QuestionOpen =({index, removeQuestion,fields, question})=> {
        return (
            <div className="row" style={{borderBottom: '1px solid #ffd740', padding: '20px 10px'}}>
                <div className="col s1"><button onClick={()=>removeQuestion(index,fields)}>X</button></div>
                <div className="col s10">
                    <p>{index+1} Question Open</p>

                    <Field
                        name={`${question}.question`}
                        type="text"
                        value=''
                        component={SurveyField}
                    />
                    <Field type="text"
                           name={`${question}.answer`}
                           disabled={true}
                           placeholder="Space for an answer"
                           component={SurveyField}/>
                </div>


            </div>

        );
};

export default QuestionOpen;
