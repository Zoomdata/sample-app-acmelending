export const REQUEST_GRADE_DATA = 'REQUEST_GRADE_DATA';
export const RECEIVE_GRADE_DATA = 'RECEIVE_GRADE_DATA';
export const REQUEST_KPI_DATA = 'REQUEST_KPI_DATA';
export const RECEIVE_KPI_DATA = 'RECEIVE_KPI_DATA';
export const REQUEST_KPI_TOTALS = 'REQUEST_KPI_TOTALS';
export const RECEIVE_KPI_TOTALS = 'RECEIVE_KPI_TOTALS';
export const REQUEST_PIVOT_DATA = 'REQUEST_PIVOT_DATA';
export const RECEIVE_PIVOT_DATA = 'RECEIVE_PIVOT_DATA';

export const SET_LOAN_GRADE = 'SET_LOAN_GRADE';
export const REQUEST_TREND_DATA = 'REQUEST_TREND_DATA';
export const REQUEST_TREND_DATA_FAILED = 'REQUEST_TREND_DATA_FAILED';
export const RECEIVE_TREND_DATA = 'RECEIVE_TREND_DATA';
export const SET_TREND_LOAN_GRADE = 'SET_TREND_LOAN_GRADE';
export const SET_TREND_LOAN_STATUS = 'SET_TREND_LOAN_STATUS';
export const SET_TREND_EMP_LENGTH = 'SET_TREND_EMP_LENGTH';
export const CHANGE_TREND_FILTER = 'CHANGE_TREND_FILTER';
export const SET_TABLE_LOAN_GRADE = 'SET_TABLE_LOAN_GRADE';
export const SET_TABLE_LOAN_STATUS = 'SET_TABLE_LOAN_STATUS';

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

export function requestKPITotals(source) {
    return {
        type: REQUEST_KPI_TOTALS,
        source
    }
}

export function receiveKPITotals(data) {
    return {
        type: RECEIVE_KPI_TOTALS,
        data
    }
}

export function requestTrendData(source) {
	return {
        type: REQUEST_TREND_DATA,
        source
    }
}

export function requestTrendDataFailed(error) {
    return {
        type: REQUEST_TREND_DATA_FAILED,
        error
    }
}

export function receiveTrendData(data) {
    return {
        type: RECEIVE_TREND_DATA,
        data
    }
}

export function requestPivotData(source) {
    return {
        type: REQUEST_PIVOT_DATA,
        source
    }
}

export function receivePivotData(data) {
    return {
        type: RECEIVE_PIVOT_DATA,
        data
    }
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

export function setTrendLoanStatus(param) {
    return {
        type: SET_TREND_LOAN_STATUS,
        param
    }
}

export function setTrendEmpLength(param) {
    return {
        type: SET_TREND_EMP_LENGTH,
        param
    }
}

export function changeTrendFilter() {
    return {
        type: CHANGE_TREND_FILTER
    }
}

export function setTableLoanGrade(param) {
    return {
        type: SET_TABLE_LOAN_GRADE,
        param
    }
}

export function setTableLoanStatus(param) {
    return {
        type: SET_TABLE_LOAN_STATUS,
        param
    }
}
