import metadataReducer from './metadata';
import sendingApplicationReducer from './application';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    _metadata: metadataReducer,
    application: sendingApplicationReducer
});