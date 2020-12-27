import React, {useEffect} from 'react';
import Surveys from "./Surveys";
import Spinner from "../../UI/Spinner/Spinner";
import {useStore} from "../../../hooks-store/store";
import {
    FETCH_SURVEYS, LOADING_START, SURVEY_FAILED
} from "../../../hooks-store/types";
import axios from "axios";

const SurveyList = () => {
    const state = useStore()[0];
    const dispatch = useStore()[1];

    useEffect( () => {
        const fetchSurveys = async () => {
            dispatch(LOADING_START);
            try {
                const res = await axios.get('/api/surveys');
                dispatch(FETCH_SURVEYS, res.data);
            } catch (error) {
                dispatch(SURVEY_FAILED, error.response.status);
            }
        };
        fetchSurveys();
    },[]);

    if (state.loading) {
        return <Spinner/>;
    } else return (
        <div className="bg bg-secondary">
            <div className="container">
                <div className="survey row">
                    <div className="col m8 s12 outline">
                        <Surveys
                            surveys={state.surveys}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SurveyList;
