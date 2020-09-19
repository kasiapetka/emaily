import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './Header/Header';
import Landing from "./Landing/Landing";
import ErrorMessage from './ErrorMessage';
import Dashboard from "./Dashboard/Dashboard";
import {connect} from "react-redux";
import * as actions from '../store/actions';
import SurveyForm from "./Survey/SurveyForm/SurveyForm";
import SurveyFill from "./Survey/SurveyFill/SurveyFill";
import PrivateRoute from './privateRoute';

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <Router>
                <React.Fragment>
                    <Header/>
                    <div>
                        <Switch>
                            <Route path='/' exact component={Landing}/>
                            <PrivateRoute path='/surveys' exact component={Dashboard}/>
                            <PrivateRoute path='/surveys/new' component={SurveyForm}/>
                            <Route path='/surveys/:surveyId' component={SurveyFill}/>
                            <Route path='/' component={ErrorMessage}/>
                        </Switch>
                    </div>
                </React.Fragment>
            </Router>
        );
    }
}

export default connect(null, actions)(App);
