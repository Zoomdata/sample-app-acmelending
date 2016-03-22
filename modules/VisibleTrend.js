import React from 'react';
import { connect } from 'react-redux';
import { setTrendLoanGrade } from '../actions'
import Trend  from './Trend';
import LoanGradeDropDown  from './LoanGradeDropDown';
import _ from 'lodash/core';

let prevParam;

const mapDispatchToProps = (dispatch) => {
  return {
    onGradeSelected: (event) => {
      dispatch(setTrendLoanGrade(event.target.text));
    },
    onClick: (param) => {
    	if (!_.isEqual(param, prevParam)) {
    		  prevParam = param;
      		// TODO: add a dispatch
          // dispatch(setLoanGrade(param))
      }
    }
  }
}

const mapStateToProps = (state) => {
    return {
        data: state.chartData.trendData.data,
        grades: state.chartData.gradeData.data,
        filters: state.chartFilters
    }
};

const VisibleTrend = ({
	data,
  grades,
  filters,
  onClick,
  onGradeSelected
}) => {
	var height = 500;
	var width = height * 1.6; //golden ratio
    return (
      <div className='row'>
        <div className='col-md-3' style={{padding: 80}}>
          <LoanGradeDropDown
            items={grades}
            onGradeSelected={onGradeSelected}
            filters={filters}
          />
        </div>
        <div className='col-md-9'>
          <Trend 
            items={data}
            width={width}
            height={height}
            onClick={onClick}
          />
        </div>
      </div>
    )
};

export default connect(mapStateToProps,mapDispatchToProps)(VisibleTrend);