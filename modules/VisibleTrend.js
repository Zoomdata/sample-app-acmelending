import React from 'react';
import { connect } from 'react-redux';
import { setTrendLoanGrade, setTrendLoanStatus, setTrendEmpLength, changeTrendFilter} from '../actions'
import Trend  from './Trend';
import LoanGradeDropDown  from './LoanGradeDropDown';
import LoanStatusDropDown  from './LoanStatusDropDown';
import EmploymentLength from './EmploymentLength';
import EmpLengthChecks from './EmpLengthChecks';
import _ from 'lodash/core';
import image from '../images/loading.gif';

const mapDispatchToProps = (dispatch) => {
  return {
    onEmpLengthSelected: (event, href, eventKey) => {
        var eventObj = {
            targetId: event.target.id,
            selected: event.target.checked
        }
        dispatch(setTrendEmpLength(eventObj));
        dispatch(changeTrendFilter()); 
    }, 
    onGradeSelected: (event) => {
      dispatch(setTrendLoanGrade(event));
      dispatch(changeTrendFilter());
    },
    onStatusSelected: (event) => {
      dispatch(setTrendLoanStatus(event));
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
  paddingTop: '20'
};

const loadTrend = (data, width, height, onClick) => {
  if (!data) {
    return (
        <div style={{paddingTop: 50, paddingLeft: 200}} ><img src={image} /></div>
    );
  } else {
    return (
        <Trend 
          items={data}
          width={width}
          height={height}
          onClick={onClick}
        />
    );
  }
}

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
                  filterField='trendLoanGrade'
                />
                <div style={{padding:10}}/>
                <LoanStatusDropDown
                  onStatusSelected={onStatusSelected}
                  filters={filters}
                  filterField='trendLoanStatus'
                />
                <div style={{padding:10}}/>
                <EmpLengthChecks
                  onEmpLengthSelected={onEmpLengthSelected}
                  filters={filters}
                />
            </div>
            <div className='col-md-9'>
                <div style={{padding:10}}/>
                  {loadTrend(data, width, height, onClick)}
                </div>
          </div>
      </div>
    )
};

export default connect(mapStateToProps,mapDispatchToProps)(VisibleTrend);