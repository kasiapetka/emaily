import React, {Component} from 'react';
import {connect} from "react-redux";
import SurveyFormFirstPage from "./SurveyFormFirstPage";
import SurveyFormSecondPage from "./SurveyFormSecondPage";
import SurveyFormThirdPage from "./SurveyFormThirdPage";
import * as actions from "../../../store/actions";

class SurveyForm extends Component {
    onSubmit=(values)=>{
        console.log(values)
    }

    renderStep(){
        switch(this.props.currentPage?.id){
            case 0:
                return <SurveyFormFirstPage onSubmit={this.props.goToNextPage}/>;
            case 1:
                return <SurveyFormSecondPage previousPage={this.props.goToPrevPage}
                                             onSubmit={this.props.goToNextPage}/>;
            case 2:
                return <SurveyFormThirdPage previousPage={this.props.goToPrevPage}
                                            onSubmit={this.onSubmit}/>;
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
        currentPage: survey.currentPage
    };
}

export default (connect(mapStateToProps, actions)(SurveyForm));
