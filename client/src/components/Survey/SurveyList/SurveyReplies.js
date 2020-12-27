import React, {useEffect} from 'react';
import Spinner from "../../UI/Spinner/Spinner";
import BarChart from "./SurveyCharts/BarChart";
import DonutChart from "./SurveyCharts/DonutChart";
import {useStore} from "../../../hooks-store/store";
import {
    FETCH_REPLIES, LOADING_START, SURVEY_FAILED
} from "../../../hooks-store/types";
import axios from "axios";

const SurveyReplies = props => {
    const state = useStore()[0];
    const dispatch = useStore()[1];

    useEffect(() => {
        const fetchReplies = async(id) => {
            dispatch(LOADING_START);
            try {
                const res = await axios.get('/api/surveys/reply/' + id);
                dispatch(FETCH_REPLIES, res.data);
            } catch (error) {
                dispatch(SURVEY_FAILED, error);
            }
        };
        fetchReplies(props.match.params.surveyId);
    }, []);

    const renderCharts = () => {
        return state.replies.map((reply, index) => {
            if (reply.id === 0) {
                return <div className="row">
                    <div key={index} className="col l7 m8 s12" style={{marginTop: '15px'}}>
                        <div className="reply">
                            <h5 style={{marginBottom: '1.5rem'}}>{index + 1}. {reply.answers.question}</h5>
                            {
                                reply.answers.values?.length !== 0
                                ?
                                    <ul className="collection">{reply.answers.values.map((a, i) => a ? <li key={i}
                                                                                                           className="collection-item">{a}</li> : null)}</ul>
                                    :
                                    <p>No replies yet.</p>
                            }

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

    if (state.replies) {
        return <div className="bg bg-secondary">
            <div className="container">
                <div className="survey" style={{marginTop: '15px'}}>
                    {renderCharts()}
                </div>
            </div>
        </div>;
    } else return <Spinner/>;
};


export default SurveyReplies;

