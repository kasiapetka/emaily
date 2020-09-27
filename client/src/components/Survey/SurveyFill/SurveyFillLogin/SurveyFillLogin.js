import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import * as actions from "../../../../store/actions";
import SurveyField from "../../SurveyForm/SurveyField/SurveyField";
import {RiCheckFill} from "react-icons/ri";

class SurveyFillLogin extends Component {
    render() {
        return (
            <div className="bg bg-secondary">
                <div className="container">
                    <div className="survey row">
                        <div className="col m8 s12">
                            <form onSubmit={this.props.handleSubmit((values) =>
                                this.props.loginToSurvey(values.surveyPassword, this.props.surveyId))}>
                                <Field type="password"
                                       name="surveyPassword"
                                       label="Password to the survey:"
                                       component={SurveyField}/>
                                <button type="submit" className="btn large indigo darken-4">Login <RiCheckFill/>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyFillLogin',
})(connect(null, actions)(SurveyFillLogin));
