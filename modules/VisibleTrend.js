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

/**
 * VisibleTrend is a composite of the Trend component and of its filter components.  It also 
 * uses react-redux to connect VisibleTrend with the application state (mapStateToProps) and with 
 * mapDispatchToProps to allow it to dispatch Redux actions. 
 */
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
        trendData: state.chartData.trendData,
        gradeData: state.chartData.gradeData,
        filters: state.chartFilters
    }
};

var controlStyle = {
  paddingTop: '20',
  paddingRight: '40',
  paddingLeft: '70',
  minWidth: '257',
  maxWidth: '257'
};

const loadTrend = (data, onClick) => {
  if (!data) {
    return (
        <div style={{paddingTop: 50, paddingLeft: 200}} ><img src={image} /></div>
    );
  } else {
    var widthMargin = 380;
    var heightRatio = 1.8;
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

const renderFilterLoading = (trendData) => {
  if (trendData.data && trendData.isFetching) {
    return (
      <div style={{paddingTop: 20}}>
        <img style={{width:150, height:100}} src={image} />
      </div>
    );
  } else {
    return (
      <div style={{paddingTop: 20}}></div>
    );    
  }
}

const VisibleTrend = ({
	trendData,
  gradeData,
  filters,
  onClick,
  onGradeSelected,
  onStatusSelected,
  onEmpLengthSelected
}) => {
    return (
      <div>
        <div className='wrapper'>
            <div className='aside-1' style={controlStyle}>
                <LoanGradeDropDown
                  items={gradeData.data}
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
                {renderFilterLoading(trendData)}
            </div>
            <div className='main'>
                <div style={{padding:10}}/>
                {loadTrend(trendData.data, onClick)}
            </div>
        </div>
      </div>
    )
};

export default connect(mapStateToProps,mapDispatchToProps)(VisibleTrend);