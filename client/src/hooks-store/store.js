import {useState, useEffect, useReducer} from 'react';

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = () => {
    const setState = useState(globalState)[1];

    const dispatch = (actionType, payload) =>{
        const newState = actions[actionType](globalState, payload);
        globalState = {...globalState,...newState};

        listeners.forEach(listener => {
            listener(globalState);
        })
    };

    useEffect(()=>{
        listeners.push(setState);

        return () => {
            listeners = listeners.filter(l=> l !== setState);
        }
    },[setState]);

    return [globalState, dispatch];
};

export const initStore = (userActions, initialState) =>{
    if(initialState){
        globalState = {...globalState, ...initialState};
    }

    actions = {...actions, ...userActions};
};
