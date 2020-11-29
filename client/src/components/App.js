import React, {useEffect, useContext} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './Header/Header';
import Landing from "./Landing/Landing";
import ErrorMessage from './ErrorMessage';
import Dashboard from "./Dashboard/Dashboard";
import SurveyForm from "./Survey/SurveyForm/SurveyForm";
import SurveyFill from "./Survey/SurveyFill/SurveyFill";
import PrivateRoute from './privateRoute';
import SurveyList from "./Survey/SurveyList/SurveyList";
import Spinner from "./UI/Spinner/Spinner";
import SurveyReplies from "./Survey/SurveyList/SurveyReplies";
import {AuthContext} from "../context/auth-context";

const App = () => {
    const auth = useContext(AuthContext).auth;
    const fetchUser = useContext(AuthContext).fetchUser;

    useEffect(() => {
        fetchUser();
    }, []);

    let content = <Spinner/>;
    if (auth !== null)
        content = <Router>
            <React.Fragment>
                <Header/>
                <div>
                    <Switch>
                        <Route path='/' exact component={() => <Landing auth={auth}/>}/>
                        <PrivateRoute path='/surveys' exact component={Dashboard} auth={auth}/>
                        <PrivateRoute path='/surveys/new' exact component={SurveyForm} auth={auth}/>
                        <PrivateRoute path='/surveys/list' exact component={SurveyList} auth={auth}/>
                        <PrivateRoute path='/surveys/list/:surveyId' exact component={SurveyReplies} auth={auth}/>
                        <Route path='/surveys/:surveyId' component={SurveyFill}/>
                        <Route path='/' component={ErrorMessage}/>
                    </Switch>
                </div>
            </React.Fragment>
        </Router>;

    return content;
}

export default App;
