import React, {Component} from 'react';
import SurveyForm from "./SurveyForm/SurveyForm";
import {reduxForm} from "redux-form";

class SurveyNew extends Component {

    render() {
        return (
            <div>
               <SurveyForm/>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);
