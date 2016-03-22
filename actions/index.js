export const REQUEST_GRADE_DATA = 'REQUEST_GRADE_DATA';
export const RECEIVE_GRADE_DATA = 'RECEIVE_GRADE_DATA';
export const REQUEST_KPI_DATA = 'REQUEST_KPI_DATA';
export const RECEIVE_KPI_DATA = 'RECEIVE_KPI_DATA';
export const SET_LOAN_GRADE = 'SET_LOAN_GRADE';
export const REQUEST_TREND_DATA = 'REQUEST_TREND_DATA';
export const RECEIVE_TREND_DATA = 'RECEIVE_TREND_DATA';
export const SET_TREND_LOAN_GRADE = 'SET_TREND_LOAN_GRADE';

export function requestGradeData(source) {
    return {
        type: REQUEST_GRADE_DATA,
        source
    }
}

export function receiveGradeData(data) {
    return {
        type: RECEIVE_GRADE_DATA,
        data
    }
}

export function requestKPIData(source) {
    return {
        type: REQUEST_KPI_DATA,
        source
    }
}

export function receiveKPIData(data) {
    return {
        type: RECEIVE_KPI_DATA,
        data
    }
}

export function requestTrendData(source) {
	return {
        type: REQUEST_TREND_DATA,
        source
    }
}

export function receiveTrendData(data) {
    return {
        type: RECEIVE_TREND_DATA,
        data
    }
}

export const FilterStatuses = {
    FILTERS_APPLIED: 'FILTERS_APPLIED',
    FILTERS_RESET: 'FILTERS_RESET'
}

export function setLoanGrade(param) {
	return {
		type: SET_LOAN_GRADE,
		param
	}
}

export function setTrendLoanGrade(param) {
	return {
		type: SET_TREND_LOAN_GRADE,
		param
	}
}