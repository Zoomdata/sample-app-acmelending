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
  paddingTop: '20',
  paddingRight: '40',
  minWidth: '257'
};

const loadTrend = (data, onClick) => {
  if (!data) {
    return (
        <div style={{paddingTop: 50, paddingLeft: 200}} ><img src={image} /></div>
    );
  } else {
    var widthMargin = 380;
    var heightRatio = 1.6;
    return (
        <Trend 
          items={data}
          widthMargin={widthMargin}
          heightRatio={heightRatio}
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
    return (
      <div>
        <div className='row'>
            <div className='col-xs-3' style={controlStyle}>
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
            <div className='col-xs-9'>
                <div style={{padding:10}}/>
                  {loadTrend(data, onClick)}
                </div>
          </div>
      </div>
    )
};

export default connect(mapStateToProps,mapDispatchToProps)(VisibleTrend);