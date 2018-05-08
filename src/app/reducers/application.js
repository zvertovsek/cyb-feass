import * as actionTypes from '../actions/types';
import { updateObject } from '../utils';

const initialState = {
    applicationData: {},
    loading: false,
    error: false,
    applicationSent: false
};

const _sendingApplicationStart = (state, action) => {
    return updateObject(state, action.payload);
};

const _sendingApplicationSuccess = (state, action) => {
    return updateObject(state, action.payload);
}

const _sendingApplicationFailure = (state, action) => {
    return updateObject(state, action.payload);
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.APPLICATION_START: return _sendingApplicationStart(state, action); 
        case actionTypes.APPLICATION_SUCCESS: return _sendingApplicationSuccess(state, action); 
        case actionTypes.APPLICATION_FAILURE: return _sendingApplicationFailure(state, action); 
        default: return state;
    }
};

export default reducer;
