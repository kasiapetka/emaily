import React from 'react';
import {Field, reduxForm} from "redux-form";
import SurveyField from "../../SurveyForm/SurveyField/SurveyField";
import {RiCheckFill} from "react-icons/ri";
import {useStore} from "../../../../hooks-store/store";
import {
    LOADING_START, SURVEY_FAILED,
    SURVEY_FILL_LOGIN
} from "../../../../hooks-store/types";
import axios from "axios";

const SurveyFillLogin = props => {
    const state = useStore()[0];
    const dispatch = useStore()[1];

    const loginToSurvey = async (password, id) => {
            dispatch(LOADING_START);
            try {
                const res = await axios.post('/api/surveys/' + id, {password: password});
                dispatch(SURVEY_FILL_LOGIN, res.data);
            } catch (error) {
                dispatch(SURVEY_FAILED, error.response.status);
            }
        };

    return (
        <div className="bg bg-secondary">
            <div className="container">
                <div className="survey row">
                    <div className="col m8 s12">
                        <form onSubmit={props.handleSubmit((values) => loginToSurvey(values.surveyPassword, props.surveyId))}>
                            <Field type="password"
                                   name="surveyPassword"
                                   label="Password to the survey:"
                                   component={SurveyField}/>
                            <button type="submit" className="btn large indigo darken-4">Login <RiCheckFill/>
                            </button>
                        </form>
                        {state.error === 400 ? <p className="red-text">Wrong password! </p> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default reduxForm({
    form: 'surveyFillLogin',
})(SurveyFillLogin);
