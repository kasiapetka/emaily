import React, {Component} from 'react';
import {reduxForm, Field} from "redux-form";
import SurveyField from "./SurveyField/SurveyField";
import './SurveyForm.scss';
import { RiCheckFill } from 'react-icons/ri'
import {Link} from "react-router-dom";

const INPUTS = [
    {name: 'title', label: 'Survey Title'},
    {name: 'subject', label: 'Subject'},
    {name: 'body', label: 'Email Body'},
    {name: 'emails', label: 'Recipient List'}
];

class SurveyForm extends Component {

    renderFields() {
        return (
            <div>
                {
                    INPUTS.map(({label, name}) => <Field type="text"
                                                         key={name}
                                                         name={name}
                                                         label={label}
                                                         component={SurveyField}/>)
                }
            </div>
        );
    }

    render() {
        return (
            <div className="bg bg-secondary">
                <div className="container">
                    <div className="survey row">
                        <div className="col m8 s12">
                            <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                                {this.renderFields()}
                                <div className="flex flex-justify-between buttons">
                                    <Link to="/surveys" className="btn large red darken-4">Cancel</Link>
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
})(SurveyForm);
