import React, {Component} from 'react';
import {RiCheckFill} from "react-icons/ri";
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import validate from './validate'
import SurveyField from "./SurveyField/SurveyField";

const renderError = ({meta: {touched, error}}) =>
    touched && error ? <span className="error">{error}</span> : false;

class SurveyFormFirstPage extends Component {

    state = {
        specifyRecipients: false
    };

    limitDetails = () => {
        if (this.state.specifyRecipients) {
            return (
                <div>
                    provide emails
                </div>
            )
        } else if (!this.state.specifyRecipients) {
            return (
                <div>
                    <Field name="limit"
                           component={SurveyField}
                           type="number"
                           label="Set limit for the number of replies"
                           value={20}
                    />
                </div>
            )
        }
    };

    handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="bg bg-secondary">
                <div className="container">
                    <div className="survey row">
                        <div className="col m8 s12">
                            <form onSubmit={this.props.handleSubmit(() => this.props.onSubmit())}>
                                <div className="survey-field">
                                    <label>Do You want to set password for Your survey?</label>
                                    <p>
                                        <label>
                                            <Field name="password"
                                                   component="input"
                                                   type="radio"
                                                   value="true"
                                            />
                                            <span>Yes, set password</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <Field name="password"
                                                   component="input"
                                                   type="radio"
                                                   value="false"
                                            />
                                            <span>No, skip password</span>
                                        </label>
                                    </p>
                                    <Field name="password" component={renderError}/>
                                </div>
                                <div>
                                    <label>Do You want to specify the recipients?</label>
                                    <p>
                                        <label>
                                            <Field className="filled-in" name="specifyRecipients" component="input"
                                                   type="checkbox" onChange={(e) => this.handleChange(e)}
                                                   value={this.state.specifyRecipients} checked={this.state.specifyRecipients}/>
                                            <span>Yes</span>
                                        </label>
                                    </p>
                                </div>
                                {this.limitDetails()}
                                <div className="flex flex-justify-between buttons">
                                    <Link to="/surveys" className="btn large red darken-4">Cancel</Link>
                                    <button type="submit" className="btn large indigo darken-4">Next <RiCheckFill/>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default reduxForm({
    form: 'surveyForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
   // validate
})(SurveyFormFirstPage);
