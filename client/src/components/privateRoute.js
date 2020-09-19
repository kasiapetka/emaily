import React from "react";
import { Route, Redirect } from "react-router-dom";
import {connect} from "react-redux";

const privateRoute = ({component: Component, auth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (auth) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(privateRoute);
