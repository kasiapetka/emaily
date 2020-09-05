import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './Header/Header';
import Landing from "./Landing/Landing";
import ErrorMessage from './ErrorMessage';
import Dashboard from "./Dashboard/Dashboard";
import SurveyNew from "./SurveyNew/SurveyNew";
import {connect} from "react-redux";
import * as actions from '../store/actions';

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
                            <Route path='/surveys' exact component={Dashboard}/>
                            <Route path='/surveys/new' component={SurveyNew}/>
                            <Route path='/' component={ErrorMessage}/>
                        </Switch>
                    </div>
                </React.Fragment>
            </Router>
        );
    }
}

export default connect(null, actions)(App);
