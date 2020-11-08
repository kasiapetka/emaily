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
                return <div className="reply">
                    <h5 style={{marginBottom: '1.5rem'}}>{index+1}. {reply.answers.question}</h5>
                    <ul className="collection" key={reply.id}>{reply.answers.values.map(a => <li className="collection-item">{a}</li>)}</ul>
                </div>
            } else {
                return <div className="reply">
                    <h5 style={{marginBottom: '1.5rem'}}>{index+1}. {reply.answers.question}</h5>
                    <BarChart key={reply.id} answers={reply.answers.answers}/>
                </div>
            }
        })
    };

    render() {
        if (this.props.replies) {
            return <div className="bg bg-secondary">
                <div className="container">
                    <div className="survey row">
                        <div className="col l8 m9 s12" style={{marginTop: '15px'}}>
                            {this.renderCharts()}
                        </div>
                    </div>
                </div>
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

