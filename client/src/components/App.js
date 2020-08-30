import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './Header/Header';
import Landing from "./Landing/Landing";
import ErrorMessage from './ErrorMessage';
import {connect} from "react-redux";
import * as actions from '../actions';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <Router>
                    <React.Fragment>
                        <Header/>
                        <div className="container">
                            <Switch>
                                <Route path='/' exact component={Landing}/>
                                <Route path='/surveys' exact component={Dashboard}/>
                                <Route path='/surveys/new' component={SurveyNew}/>
                                <Route path='/' component={ErrorMessage}/>
                            </Switch>
                        </div>
                    </React.Fragment>
                </Router>
            </div>
        );
    }
}

export default connect(null, actions)(App);
