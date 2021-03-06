import React from 'react'
import {Link} from "react-router-dom";
import {RiCheckDoubleFill as Full} from 'react-icons/ri'
import {useStore} from "../../../hooks-store/store";
import {
    DELETE_SURVEY, LOADING_START, SURVEY_FAILED
} from "../../../hooks-store/types";
import axios from "axios";

const formatDate = (date) => {
    if (date) {
        let dateArr = date.split('T')[0].split('-');
        return dateArr[2] + '/' + dateArr[1] + '/' + dateArr[0];
    } else return 'No response yet.';
};

const Survey = (props) => {
    const dispatch = useStore()[1];
    let title = <h5 style={{margin: '0'}}>Title: {props.title}</h5>;
    if (props.limit === props.repliesCount) {
        title = <h5 style={{margin: '0'}} className="green-text text-darken-1">Title: {props.title} <Full/></h5>;
    }

    const deleteSurvey = async (id) => {
            dispatch(LOADING_START);
            try {
                const res = await axios.delete('/api/surveys/' + id);
                dispatch(DELETE_SURVEY, res.data);
            } catch (error) {
                dispatch(SURVEY_FAILED, error.response.status);
            }
        };

    return (
        <div className="survey-list">
            <div className="flex flex-justify-between">
                {title}
                <div className="flex">
                    <Link to={"/surveys/list/" + props.URL}>
                        <button className="btn btn-small indigo darken-4">See more</button>
                    </Link>
                    <button type="button" className="flex flex-middle btn btn-small red darken-4"
                            style={{padding: '0 10px', marginLeft: '10px'}}
                            onClick={() => deleteSurvey(props.URL)}>X
                    </button>
                </div>
            </div>
            <h6>Subject: {props.subject}</h6>
            <h6>Body: {props.body}</h6>
            <div className="flex flex-justify-between">
                <div className="flex-column">
                    <div className="flex flex-column">
                        <span style={{fontWeight: 'bold'}}>Created on:</span>
                        <span>{formatDate(props.dateSend)}</span>
                    </div>
                    <div className="flex flex-column">
                        <span style={{fontWeight: 'bold'}}>Last response:</span>
                        <span>{formatDate(props.lastResponded)}</span>
                    </div>
                    <div className="flex flex-column flex-end">
                        <span style={{fontWeight: 'bold'}}>Password:</span>
                        <span>{props.password ? props.password : 'No password'}</span>
                    </div>
                </div>
                <div className="flex-column">
                    <div className="flex flex-column">
                        <span style={{fontWeight: 'bold'}}>Limit:</span>
                        <span>{props.limit}</span>
                    </div>
                    <div className="flex flex-column">
                        <span style={{fontWeight: 'bold'}}>Responses:</span>
                        <span>{props.repliesCount}</span>
                    </div>
                    <div className="flex flex-column">
                        <span style={{fontWeight: 'bold'}}>Link:</span>
                        <Link to={"/surveys/" + props.URL}>
                            <span>
                                Here
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Survey;

