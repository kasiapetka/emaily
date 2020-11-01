import React from 'react'
import {Link} from "react-router-dom";

const formatDate = (date) => {
    if (date) {
        let dateArr = date.split('T')[0].split('-');
        return dateArr[2] + '/' + dateArr[1] + '/' + dateArr[0];
    } else return 'No response yet.';
};

const Subject = (props) => {
    return (
        <div className="survey-list">
            <div className="flex flex-justify-between">
                <h5 style={{margin:'0'}}>Title: {props.title}</h5>
                <Link to={"/surveys/list/" + props.URL}>
                    <button className="btn btn-small indigo darken-4">See more</button>
                </Link>
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

export default Subject;
