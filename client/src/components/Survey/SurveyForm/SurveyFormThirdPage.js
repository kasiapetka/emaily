import React, {Component} from 'react';
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import * as actions from "../../../store/actions";
import {RiCheckFill} from "react-icons/ri";

class SurveyFormThirdPage extends Component {
    render() {
        return (
            <div className="bg bg-secondary">
                <div className="container">
                    <div className="survey row">
                        <div className="col m8 s12">
                            <form onSubmit={this.props.handleSubmit(() => this.props.onSubmit())}>
                              Last Page
                                <div className="flex flex-justify-between buttons">
                                    <button onClick={this.props.previousPage} className="btn large red darken-4">Back</button>
                                    <button type="submit" className="btn large indigo darken-4">Next <RiCheckFill/></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(connect(null, actions)(SurveyFormThirdPage));
