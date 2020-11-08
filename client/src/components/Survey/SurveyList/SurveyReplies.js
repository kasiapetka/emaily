import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from "../../../store/actions";
import Spinner from "../../UI/Spinner/Spinner";
import BarChart from "./SurveyCharts/BarChart";


class SurveyReplies extends Component {
    componentDidMount() {
        this.props.fetchReplies(this.props.match.params.surveyId);
    }

    renderCharts = () => {
        return this.props.replies.map((reply, index) => {
            if (reply.id === 0) {
                return <React.Fragment>
                    <h5>{reply.answers.question}</h5>
                    <ul key={reply.id}>{reply.answers.values.map(a => <li>{a}</li>)}</ul>
                </React.Fragment>
            } else {
                return <React.Fragment>
                    <h5>{reply.answers.question}</h5>
                    <BarChart key={reply.id} answers={reply.answers.answers}/>
                </React.Fragment>
            }
        })
    };

    render() {
        if (this.props.replies) {
            return <div>
                {this.renderCharts()}
            </div>;
        } else return <Spinner/>;
    }
}

function mapStateToProps({survey}) {
    return {
        replies: survey.replies,
        loading: survey.loading,
        error: survey.error,
    };
}

export default connect(
    mapStateToProps, actions
)(SurveyReplies);

