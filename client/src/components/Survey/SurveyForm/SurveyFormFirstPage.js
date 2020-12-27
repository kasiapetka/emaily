import React from 'react';
import {RiCheckFill} from "react-icons/ri";
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import validate from './validate'
import SurveyField from "./SurveyField/SurveyField";
import SurveyFormSuccess from "./SurveyFormSuccess";
import {useStore} from "../../../hooks-store/store";

const renderError = ({meta: {touched, error}}) =>
    touched && error ? <span className="validation-message">{error}</span> : false;

const SurveyFormFirstPage = props => {

    const state = useStore()[0];

    let content;
    if (state.surveyCreatedSuccess) {
        content = <SurveyFormSuccess URL={state.surveyCreatedURL} password={state.surveyCreatedPass}/>;
    } else {
        content = <div className="bg bg-secondary">
            <div className="container">
                <div className="survey row">
                    <div className="col m8 s12">
                        <form onSubmit={props.handleSubmit(() => props.onSubmit())}>
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
                                <Field name="limit"
                                       component={SurveyField}
                                       type="number"
                                       label="Set limit for the number of replies"
                                />
                            </div>
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
    }
    return content;
};

export default reduxForm({
    form: 'surveyForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(SurveyFormFirstPage);
