import 'materialize-css/dist/css/materialize.min.css';
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from "redux";
import reduxThunk from 'redux-thunk';
import './styles/Flex.scss';
import './styles/Element.scss';
import './styles/Size.scss';
import './styles/General.scss';
import './styles/Input.scss';
import AuthProvider from './context/auth-context'
import {configureStore} from "./hooks-store/survey-store";
import {reducer as formReducer} from "redux-form";

const reducers = combineReducers({
    form: formReducer,
});

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

configureStore();

ReactDOM.render(
    <Provider store={store}>
        <AuthProvider> <App/> </AuthProvider>
    </Provider>,
    document.querySelector('#root'));
