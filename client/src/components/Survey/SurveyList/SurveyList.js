import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from "../../../store/actions";
import Surveys from "./Surveys";


class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    render() {
        console.log(this.props.surveys)

        return (
            <div className="bg bg-secondary">
                <div className="container">
                    <div className="survey row">
                        <div className="col m8 s12 outline">
                            <Surveys
                                surveys={this.props.surveys}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({survey}) {
    return {
        surveys: survey.surveys,
        loading: survey.loading,
        error: survey.error,
    };
}

export default connect(
    mapStateToProps,actions
)(SurveyList);
