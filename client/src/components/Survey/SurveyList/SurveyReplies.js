import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from "../../../store/actions";
import Spinner from "../../UI/Spinner/Spinner";
import BarChart from "./SurveyCharts/BarChart";


class SurveyReplies extends Component {
    componentDidMount() {
        this.props.fetchReplies(this.props.match.params.surveyId);
    }

    renderCharts =()=>  {
        return this.props.replies.map((reply, index) => {
            switch (reply.id) {
                case 0:
                    return <BarChart/>;
                case 1:
                    return <p>1</p>;
                case 2:
                    return <p>2</p>;
                case 3:
                    return <p>3</p>
            }
        })
    };

    render() {
        if(this.props.replies) {
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
    mapStateToProps,actions
)(SurveyReplies);

