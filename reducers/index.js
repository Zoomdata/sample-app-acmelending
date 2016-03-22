import { combineReducers } from 'redux';
import chartData from './chart-data';
import chartFilters from './chart-filters';
import {responsiveStateReducer} from 'redux-responsive';

const rootReducer = combineReducers({
    browser: responsiveStateReducer,
    chartData, 
    chartFilters
});

export default rootReducer;