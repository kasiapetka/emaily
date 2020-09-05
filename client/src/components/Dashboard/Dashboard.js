import React, {Component} from "react";
import {RiAddLine as Plus} from "react-icons/ri";
import './Dashboard.scss';
import {Link} from "react-router-dom";
import DashboardOptions from "./DashboardOptions/DashboardOptions";
import Modal from "../UI/Modal/Modal";

class Dashboard extends Component {
    state = {
        showModal: false
    };
    toggleModal = () => {
        this.setState(prevState => {
                return {showModal: !prevState.showModal}
            }
        )
    };

    render() {
        const modal = this.state.showModal
            ?
            <Modal show={this.state.showModal}
                   modalClosed={this.toggleModal}>
                <DashboardOptions/>
            </Modal>
            :
            null;
        return (
            <React.Fragment>
                <div className="bg bg-primary">
                    <div className="container dashboard">
                        <div className="dashboard_space"></div>
                        <h2>Dashboard</h2>
                        <div className="fixed-action-btn">
                            <button onClick={this.toggleModal}
                                    className="btn-floating btn-large waves-effect waves-light red">
                        <span
                            className="dashboard_icon flex flex-middle flex-justify-center h-100"><Plus/></span>
                            </button>
                        </div>
                    </div>
                </div>

                {modal}
            </React.Fragment>
        );
    }

};

export default Dashboard;
