import * as actionTypes from '../actions/types';
import { updateObject } from '../utils';

const initialState = {
    countries: [],
    loading: false,
    error: false
};

const _fetchCountriesStart = (state, action) => {
    return updateObject(state, action.payload);
};

const _fetchCountriesSuccess = (state, action) => {
    return updateObject(state, action.payload);
}

const _fetchCountriesFailure = (state, action) => {
    return updateObject(state, action.payload);
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_COUNTRIES_START: return _fetchCountriesStart(state, action); break;
        case actionTypes.FETCH_COUNTRIES_SUCCESS: return _fetchCountriesSuccess(state, action); break;
        case actionTypes.FETCH_COUNTRIES_FAILURE: return _fetchCountriesFailure(state, action); break;
        default: return state;
    }
};

export default reducer;

