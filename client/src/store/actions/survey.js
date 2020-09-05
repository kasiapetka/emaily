import {GO_TO_NEXT_STEP} from "./types";

export const goToNextStep =()=>
    async dispatch => {
        dispatch({type: GO_TO_NEXT_STEP});
    };
