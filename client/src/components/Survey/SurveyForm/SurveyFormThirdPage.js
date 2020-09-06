import React, {Component} from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import * as actions from "../../../store/actions";
import {RiCheckFill} from "react-icons/ri";

const QUESTION_TYPES = [
    {id: 0, name: 'open', label: 'Open Question'},
    {id: 1, name: 'abcSingle', label: 'ABC Single Answer'},
    {id: 2, name: 'abcMulti', label: 'ABC Multiple Answers'},
    {id: 3, name: 'dropdown', label: 'Dropdown Question'},
];

class SurveyFormThirdPage extends Component {

    renderQuestionTypes = () => {
        return (
            <div className="flex flex-column">
                <p>Add questions to Your survey:</p>
                {
                    QUESTION_TYPES.map(({label, name}) =>
                        <button key={name}
                                className="waves-effect waves-light btn amber darken-1">
                            <h6>{label}</h6>
                        </button>)
                }
            </div>
        );
    };

    render() {
        return (
            <div className="bg bg-secondary">
                <div className="container">
                    <div className="survey row">
                        <div className="col m8 s12">
                            <form onSubmit={this.props.handleSubmit(() => this.props.onSubmit())}>
                                <div className="flex flex-justify-between buttons">
                                    <button onClick={this.props.previousPage} className="btn large red darken-4">Back
                                    </button>
                                    <button type="submit" className="btn large indigo darken-4">Next <RiCheckFill/>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col m4 s12 questions">
                            {this.renderQuestionTypes()}
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
