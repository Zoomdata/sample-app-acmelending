import React from 'react';
import { connect } from 'react-redux';
import { setTrendLoanGrade, setTrendLoanStatus, setTrendEmpLength, changeTrendFilter} from '../actions'
import Trend  from './Trend';
import LoanGradeDropDown  from './LoanGradeDropDown';
import LoanStatusDropDown  from './LoanStatusDropDown';
import EmploymentLength from './EmploymentLength';
import _ from 'lodash/core';

const mapDispatchToProps = (dispatch) => {
  return {
    onEmpLengthSelected: (event, href, eventKey) => {
        dispatch(setTrendEmpLength(event.target.id));
        dispatch(changeTrendFilter());
    }, 
    onGradeSelected: (event) => {
      dispatch(setTrendLoanGrade(event.target.id));
      dispatch(changeTrendFilter());
    },
    onStatusSelected: (event) => {
      dispatch(setTrendLoanStatus(event.target.id));
      dispatch(changeTrendFilter());
    },
    onClick: (param) => {
      		// TODO: add hook for trend chart events
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

var controlStyle = {
  paddingLeft: '70',
  paddingTop: '30'
};

const VisibleTrend = ({
	data,
  grades,
  filters,
  onClick,
  onGradeSelected,
  onStatusSelected,
  onEmpLengthSelected
}) => {
	var height = 500;
	var width = height * 1.6; //golden ratio
    return (
      <div>
        <div className='row'>
          <div className='col-md-3' style={controlStyle}>
            <LoanGradeDropDown
              items={grades}
              onGradeSelected={onGradeSelected}
              filters={filters}
            />
            <div style={{padding:10}}/>
            <LoanStatusDropDown
              onStatusSelected={onStatusSelected}
              filters={filters}
            />
            <div style={{padding:10}}/>
            <EmploymentLength
              onEmpLengthSelected={onEmpLengthSelected}
              filters={filters}
            />
          </div>
          <div className='col-md-9'>
            <div style={{padding:40}}/>
            <Trend 
              items={data}
              width={width}
              height={height}
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    )
};

export default connect(mapStateToProps,mapDispatchToProps)(VisibleTrend);