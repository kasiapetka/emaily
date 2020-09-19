import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from "../../../store/actions";

class SurveyFill extends Component {

    componentDidMount() {
        this.props.fetchSurvey(this.props.match.params.surveyId);
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default connect(null, actions)(SurveyFill);
