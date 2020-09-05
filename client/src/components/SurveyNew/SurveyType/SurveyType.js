import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from "../../../store/actions";
import {RiCheckFill} from "react-icons/ri";
import {Field, reduxForm} from "redux-form";

class SurveyType extends Component {

    handleSubmit() {
        this.props.handleSubmit(values => console.log(values));
        this.props.goToNextStep();
    }

    render() {
        return (
            <div className="bg bg-secondary">
                <div className="container">
                    <div className="survey row">
                        <div className="col m8 s12">
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <label>Password</label>
                                    <div>
                                        <p>
                                            <label>
                                                <Field name="password" component="input" type="radio" value="true"/>
                                                <span>Password</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <Field name="password" component="input" type="radio" value="false"/>
                                                <span>No Password</span>
                                            </label>
                                        </p>
                                    </div>
                                </div>

                                <button type="submit" className="btn large indigo darken-4">Next <RiCheckFill/></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyType'
})(connect(null, actions)(SurveyType));
