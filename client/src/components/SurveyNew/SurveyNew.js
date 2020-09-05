import React, {Component} from 'react';
import SurveyForm from "./SurveyForm/SurveyForm";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import SurveyType from "./SurveyType/SurveyType";

class SurveyNew extends Component {
    renderStep(){

        console.log(this.props.currentStep)
        switch(this.props.currentStep?.id){
            case 0:
                return <SurveyType/>;
            case 1:
                return <SurveyForm/>;
            default:
                return <p>Error</p>
        }
    }

    render() {
        return (
            <div>
                {this.renderStep()}
            </div>
        );
    }
}

function mapStateToProps({survey}) {
    return {
        currentStep: survey.currentStep
    };
}

export default reduxForm({
    form: 'surveyForm'
})(connect(mapStateToProps)(SurveyNew));

