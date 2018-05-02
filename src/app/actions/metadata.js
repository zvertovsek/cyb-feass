import axios from 'axios';
import * as actionTypes from './types';

const _fetchStart = () => {
    return {
        type: actionTypes.FETCH_COUNTRIES_START
    };
};

const _fetchSuccess = (data) => {
    return {
        type: actionTypes.FETCH_COUNTRIES_SUCCESS,
        payload: { countries: data }
    };
};

const _fetchFailure = (error) => {
    return {
        type: actionTypes.FETCH_COUNTRIES_FAILURE,
        payload: { error: error }
    };
};

export const fetchCountries = () => {
    return dispatch => {
        dispatch(_fetchStart());

        axios.get('https://restcountries.eu/rest/v1/region/Europe')
            .then(response => {
                dispatch(_fetchSuccess(response.data));
            })
            .catch(error => {
                dispatch(_fetchFailure(error));
            });
    };
}