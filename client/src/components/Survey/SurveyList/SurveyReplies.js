import React, {useEffect} from 'react';
import {connect} from "react-redux";
import * as actions from "../../../store/actions";
import Spinner from "../../UI/Spinner/Spinner";
import BarChart from "./SurveyCharts/BarChart";
import DonutChart from "./SurveyCharts/DonutChart";


const SurveyReplies = props => {

    useEffect(() => {
        props.fetchReplies(props.match.params.surveyId);
    }, []);

    const renderCharts = () => {
        return props.replies.map((reply, index) => {
            if (reply.id === 0) {
                return <div className="row">
                    <div key={index} className="col l7 m8 s12" style={{marginTop: '15px'}}>
                        <div className="reply">
                            <h5 style={{marginBottom: '1.5rem'}}>{index + 1}. {reply.answers.question}</h5>
                            <ul className="collection">{reply.answers.values.map((a, i) => a ? <li key={i}
                                                                                                   className="collection-item">{a}</li> : null)}</ul>
                        </div>
                    </div>
                </div>
            } else {
                return <div className="row" key={index}>
                    <div className="col l7 m8 s12">
                        <div className="reply">
                            <h5 style={{marginBottom: '1.5rem'}}>{index + 1}. {reply.answers.question}</h5>
                            <BarChart key={reply.id} answers={reply.answers.answers}/>
                        </div>
                    </div>
                    <div className="col l5 m4 s12 h-100">
                        <DonutChart answers={reply.answers.answers}/>
                    </div>
                </div>
            }
        })
    };

    if (props.replies) {
        return <div className="bg bg-secondary">
            <div className="container">
                <div className="survey" style={{marginTop: '15px'}}>
                    {renderCharts()}
                </div>
            </div>
        </div>;
    } else return <Spinner/>;
};

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

