import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from "../../../store/actions";
import Surveys from "./Surveys";
import Spinner from "../../UI/Spinner/Spinner";


const SurveyList = props => {

    useEffect(() => {
        props.fetchSurveys();
    },[]);

    if (props.loading) {
        return <Spinner/>;
    } else return (
        <div className="bg bg-secondary">
            <div className="container">
                <div className="survey row">
                    <div className="col m8 s12 outline">
                        <Surveys
                            surveys={props.surveys}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps({survey}) {
    return {
        surveys: survey.surveys,
        loading: survey.loading,
        error: survey.error,
    };
}

export default connect(
    mapStateToProps, actions
)(SurveyList);
