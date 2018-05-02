import axios from 'axios';
import * as actionTypes from './types';

const _submitApplicationStart = () => {
    return {
        type: actionTypes.APPLICATION_START,
        payload: {
            applicationData: {}, 
            loading: true 
        }
    };
};

const _submitApplicationSuccess = (data, user) => {
    return {
        type: actionTypes.APPLICATION_SUCCESS,
        payload: { 
            applicationData: user,
            applicationSent: true,
            loading: false 
        }
    };
};

const _submitApplicationFailure = (error) => {
    return {
        type: actionTypes.APPLICATION_FAILURE,
        payload: { 
            error: error,
            loading: false 
        }
    };
};

export const submitApplication = (userData) => {
    return dispatch => {
        dispatch(_submitApplicationStart());
        
        axios.post('https://cybsafe-react-test.firebaseio.com/applications.json', userData)
            .then(response => {
                dispatch(_submitApplicationSuccess(response.data, userData));
            })
            .catch(error => {
                dispatch(_submitApplicationFailure(error));
            });
    }
}
