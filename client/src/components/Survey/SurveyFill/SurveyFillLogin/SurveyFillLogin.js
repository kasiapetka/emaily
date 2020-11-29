import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import * as actions from "../../../../store/actions";
import SurveyField from "../../SurveyForm/SurveyField/SurveyField";
import {RiCheckFill} from "react-icons/ri";

const SurveyFillLogin = props => {
    return (
        <div className="bg bg-secondary">
            <div className="container">
                <div className="survey row">
                    <div className="col m8 s12">
                        <form onSubmit={props.handleSubmit((values) =>
                            props.loginToSurvey(values.surveyPassword, props.surveyId))}>
                            <Field type="password"
                                   name="surveyPassword"
                                   label="Password to the survey:"
                                   component={SurveyField}/>
                            <button type="submit" className="btn large indigo darken-4">Login <RiCheckFill/>
                            </button>
                        </form>
                        {props.error === 400 ? <p className="red-text">Wrong password! </p> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps({survey}) {
    return {
        error: survey.error,
    };
}

export default reduxForm({
    form: 'surveyFillLogin',
})(connect(mapStateToProps, actions)(SurveyFillLogin));
