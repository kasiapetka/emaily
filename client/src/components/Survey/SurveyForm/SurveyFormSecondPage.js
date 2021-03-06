import React from 'react';
import {reduxForm, Field} from "redux-form";
import SurveyField from "./SurveyField/SurveyField";
import '../Survey.scss';
import {RiCheckFill} from 'react-icons/ri'
import validate from './validate'

const INPUTS = [
    {name: 'title', label: 'Survey Title'},
    {name: 'subject', label: 'Subject'},
    {name: 'body', label: 'Body - notice for recipients'},
];

const SurveyFormSecondPage = props => {
    const renderFields = () => {
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
    };

    return (
        <div className="bg bg-secondary">
            <div className="container">
                <div className="survey row">
                    <div className="col m8 s12">
                        <form onSubmit={props.handleSubmit(() => props.onSubmit())}>
                            {renderFields()}
                            <div className="flex flex-justify-between buttons">
                                <button onClick={props.previousPage} className="btn large red darken-4">Back
                                </button>
                                <button type="submit" className="btn large indigo darken-4">Next <RiCheckFill/></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default reduxForm({
    form: 'surveyForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(SurveyFormSecondPage);
