import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import SurveyField from "../SurveyForm/SurveyField/SurveyField";

class QuestionOpen extends Component {
    render() {
        return (
            <div className="row" style={{borderBottom: '1px solid aquamarine', padding: '20px 10px'}}>
                <div className="col s1"></div>
                <div className="col s10">
                    <p>{this.props.index+1} Question</p>

                    <Field
                        name={'questions['+this.props.index+'].question'}
                        type="text"
                        component={SurveyField}
                    />
                    <Field type="text"
                           name={'questions['+this.props.index+'].answer'}
                           disabled={true}
                           placeholder="Space for an answer"
                           component={SurveyField}/>
                </div>
            </div>

        );
    }
}

export default QuestionOpen;
