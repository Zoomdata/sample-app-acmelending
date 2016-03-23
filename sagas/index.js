import { take, put, call, fork, select } from 'redux-saga/effects';
import * as actions from '../actions';
import * as gradeData from '../config/queries/gradeData';
import * as kpiData from '../config/queries/kpiData';
import * as trendData from '../config/queries/trendData';
import { createClient } from '../config';

let queryData = [];
let gradeQueryRunning, kpiQueryRunning, trendQueryRunning;

function fetchDataApi(thread, group) {
    var queryGroup = group;
    return new Promise( function(resolve, reject) {
        thread.on('thread:message', function(data) {
            queryData = data;
            resolve(queryData);
        });
        thread.on('thread:notDirtyData', function() {
            if (queryGroup === 'grade') {
                gradeQueryRunning = false;
            } else if (queryGroup === 'kpi') {
                kpiQueryRunning = false;
            } else if (queryGroup === 'trend') {
                trendQueryRunning = false;
            }
            resolve(queryData);
        });
        thread.on('thread:exeption', function(error) {
            reject(error);
        });
    })
}

function getQuery(client, source, queryConfig) {
    return client.createQuery(
        {name: source},
        queryConfig
    )
}

function getThread(client, query) {
    return client.run(query);
}


var makeFilter = function(path) {
    return function(value) {
        var result = [];
        if (value !== 'All' && value !== undefined) {
            result.push( {
              path: path,
              operation: 'IN',
              value: [value],
              "form": null
            });
        }
        return result;
    };
}
var trendGradeFilter = makeFilter('grade');
var trendStatusFilter = makeFilter('loan_status');
var trendEmpLengthFilter = makeFilter('emp_length');

function* changeTrendQuery(getState) {
    while(true) {
        yield take(actions.CHANGE_TREND_FILTER);
        var state = getState();

        var loanGrade = state.chartFilters.trendLoanGrade;
        var filters = trendGradeFilter(loanGrade);

        var loanStatus = state.chartFilters.trendLoanStatus;
        filters = filters.concat(trendStatusFilter(loanStatus));

        var empLength = state.chartFilters.trendEmpLength;
        filters = filters.concat(trendEmpLengthFilter(empLength));

        var filteredQueryConfig = Object.assign({}, trendData.queryConfig, 
            { filters: filters});

        yield fork(fetchTrendData, ZoomdataClient, trendData.source, filteredQueryConfig);
    }
}

function* fetchTrendData(client, source, queryConfig) {
    trendQueryRunning = true;

    const query = yield call(getQuery, client, source, queryConfig);
    TrendDataQuery = query;

    yield put(actions.requestTrendData(trendData.source));

    const thread = yield call(getThread, client, TrendDataQuery);
    TrendDataThread = thread;

    while (trendQueryRunning) {
        const data = yield call(fetchDataApi, TrendDataThread, 'trend');

        if (trendQueryRunning) {
            yield put(actions.receiveTrendData(data));
        }
    }
}

function* fetchKPITable(client, source, queryConfig) {
    kpiQueryRunning = true;
    if (!KPIDataQuery) {
        const query = yield call(getQuery, client, source, queryConfig);
        KPIDataQuery = query;
    }
    yield put(actions.requestKPIData(kpiData.source));
    if (!KPIDataThread) {
        const thread = yield call(getThread, client, KPIDataQuery);
        KPIDataThread = thread;
    }
    while (kpiQueryRunning) {
        const data = yield call(fetchDataApi, KPIDataThread, 'kpi');
        // shouldn't it be Not Running??
        if (kpiQueryRunning) {
            yield put(actions.receiveKPIData(data));
        }
    }
}

function* fetchGradeData(client, source, queryConfig) {
    gradeQueryRunning = true;
    if (!GradeDataQuery) {
        const query = yield call(getQuery, client, source, queryConfig);
        GradeDataQuery = query;
    }
    yield put(actions.requestGradeData(gradeData.source));
    if (!GradeDataThread) {
        const thread = yield call(getThread, client, GradeDataQuery);
        GradeDataThread = thread;
    }
    while (gradeQueryRunning) {
        const data = yield call(fetchDataApi, GradeDataThread, 'grade');
        if (gradeQueryRunning) {
            yield put(actions.receiveGradeData(data));
        }
    }
}

function* startup(client) {
    yield fork(fetchGradeData, client, gradeData.source, gradeData.queryConfig);
    yield fork(fetchKPITable, client, kpiData.source, kpiData.queryConfig);
    yield fork(fetchTrendData, client, trendData.source, trendData.queryConfig);
}

export default function* root(getState) {
    const client = yield call(createClient);
    ZoomdataClient = client;
    yield call(client.sources.update, {name: 'Lending Club Loans Data'})
    yield fork(startup, ZoomdataClient);
    yield fork(changeTrendQuery, getState);
}

export let ZoomdataClient = undefined;
export let GradeDataQuery = undefined;
export let GradeDataThread = undefined;
export let KPIDataQuery = undefined;
export let KPIDataThread = undefined;
export let TrendDataQuery = undefined;
export let TrendDataThread = undefined;