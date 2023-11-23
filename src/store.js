import { createStore } from "redux";

function reducer( currentState, action ) {

    if ( currentState === undefined ) {
        return {
            name : 1 // 스테이트 초깃값
        }
    }

    const newState = { ...currentState };

    if ( action.type === "" ) {
        newState.number++;
    }

    return newState;

}

export const store = createStore(reducer);