import React from 'react';
import {Field, getFormValues, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {RiCheckFill} from "react-icons/ri";
import validate from "./validate";

const SurveyFormLastPage = props => {

    const renderQuestions = () => {
        return props.values.questions?.map((question, index) => {
            let answers;
            if (question.id === 0) {
                answers = <textarea disabled value="Space for answer." style={{height: '5rem'}}>
                            </textarea>
            }
            if ((question.id === 1 || question.id === 2) && question.answers) {
                answers = <div>
                    {question.answers.map((answer, i) => {
                        return <p key={i} style={{paddingLeft: "15px"}}>
                            <label>
                                <Field name={"answers[" + index + "]"}
                                       component="input"
                                       type="radio"
                                       disabled={true}
                                       checked={false}
                                />
                                <span>{index + 1}.{i} {answer}</span>
                            </label>
                        </p>
                    })}
                </div>;
            } else if (question.id === 3 && question.answers) {
                answers = <select name="dropdown" style={{display: 'block'}}>
                    <option value="">Options</option>
                    {question.answers.map((answer, i) => {
                        return <option key={i} value={answer} disabled={true}>{answer}</option>
                    })}
                </select>;
            }

            return <div key={index} className="question">
                <h6>{index + 1}.{question.question}</h6>
                {answers}
            </div>
        })
    };

    const onSubmit = (values) => {
        props.onSubmit(values);
        props.reset()
    };

    return <div className="bg bg-secondary">
        <div className="container">
            <div className="survey row">
                <div className="col m8 s12">
                    <form onSubmit={props.handleSubmit((values) => onSubmit(values))}>
                        <h5>Title: {props.values.title}</h5>
                        <h6>Subject: {props.values.subject}</h6>
                        <h6>Body: {props.values.body}</h6>
                        <p style={{marginBottom: "0", display: "inline-block"}}>Limit of replies: for Your
                            survey:</p>
                        <h6 style={{display: "inline-block"}}>{props.values.limit}</h6>
                        <p style={{marginTop: "0"}}>Your
                            survey {props.values.password === "false" ? "has no" : "has"} password.</p>
                        {renderQuestions()}
                        <div className="flex flex-justify-between buttons">
                            <button onClick={props.previousPage} className="btn large red darken-4">Back
                            </button>
                            <button type="submit" className="btn large indigo darken-4">Next <RiCheckFill/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>;
};

export default reduxForm({
    form: 'surveyForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(connect(state => ({
    values: getFormValues('surveyForm')(state),
}))(SurveyFormLastPage));

