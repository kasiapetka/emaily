import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from "../../../store/actions";
import {RiCheckFill} from "react-icons/ri";
import {Field, reduxForm} from "redux-form";

class SurveyType extends Component {

    handleSubmit(values) {
        console.log(values)
        this.props.goToNextStep();
    }

    render() {
        return (
            <div className="bg bg-secondary">
                <div className="container">
                    <div className="survey row">
                        <div className="col m8 s12">
                            <form onSubmit={this.props.handleSubmit(values => this.handleSubmit(values))}>
                                <div>
                                    <label>Do You want to set password for Your survey?</label>
                                    <div>
                                        <p>
                                            <label>
                                                <Field name="password" component="input" type="radio" value="true"/>
                                                <span>Yes, set password</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <Field name="password" component="input" type="radio" value="false"/>
                                                <span>No, skip password</span>
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
