import React from "react";
import {RiAddLine as Plus} from "react-icons/ri";
import './Dashboard.scss';
import {Link} from "react-router-dom";

const Dashboard = () => {
    return (
        <React.Fragment>
            <div className="bg bg-primary">
                <div className="container dashboard">
                    <div className="dashboard_space"></div>
                    <h2>Dashboard</h2>
                    <div className="fixed-action-btn">
                        <Link to="/surveys/new"
                              className="btn-floating btn-large waves-effect waves-light red">
                        <span
                            className="dashboard_icon flex flex-middle flex-justify-center h-100"><Plus/></span>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Dashboard;