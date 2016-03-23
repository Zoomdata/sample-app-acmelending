import { SET_LOAN_GRADE, SET_TREND_LOAN_GRADE, 
         SET_TREND_LOAN_STATUS, SET_TREND_EMP_LENGTH, 
         FilterStatuses } from '../actions';
const { FILTERS_RESET } = FilterStatuses;

const chartFilters = (state = {filterStatus: FILTERS_RESET}, action) => {
    switch (action.type) {
        case SET_LOAN_GRADE:
            var grade = {loanGrade: action.param.data.name[0]};
            var obj = Object.assign({}, state, grade);
            return obj;
        case SET_TREND_LOAN_GRADE:
            var trendGrade = {trendLoanGrade: action.param};
            var obj = Object.assign({}, state, trendGrade);
            return obj;
        case SET_TREND_LOAN_STATUS:
            var trendLoanStatus = {trendLoanStatus: action.param};
            var obj = Object.assign({}, state, trendLoanStatus);
            return obj;
        case SET_TREND_EMP_LENGTH:
            var trendEmpLength = {trendEmpLength: action.param};
            var obj = Object.assign({}, state, trendEmpLength);
            return obj;
        default:
            return state;
    }
}

export default chartFilters;