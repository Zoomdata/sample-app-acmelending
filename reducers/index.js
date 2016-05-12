import { combineReducers } from 'redux';
import chartData from './chart-data';
import chartFilters from './chart-filters';
import {responsiveStateReducer} from 'redux-responsive';

/**
 * Combines the application reducers so that they can be in separate files.
 */
const rootReducer = combineReducers({
    browser: responsiveStateReducer,
    chartData, 
    chartFilters
});

export default rootReducer;