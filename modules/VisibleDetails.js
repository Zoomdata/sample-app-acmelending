import React from 'react';
import { connect } from 'react-redux';
import { setTableLoanGrade, setTableLoanStatus} from '../actions'
import Pivot from './Pivot';
import image from '../images/loading.gif';
import LoanGradeDropDown  from './LoanGradeDropDown';
import LoanStatusDropDown  from './LoanStatusDropDown';

let currentFilter = {grade: 'All', status: 'All'};
let previousFilter = currentFilter;

const mapDispatchToProps = (dispatch) => {
  return { 
    onGradeSelected: (event) => {
      dispatch(setTableLoanGrade(event));
    },
    onStatusSelected: (event) => {
      dispatch(setTableLoanStatus(event));
    }
  }
}

var isFilterChanged = () => {
  var result = false;
  if (currentFilter.grade !== previousFilter.grade ||
      currentFilter.status !== previousFilter.status) {
      result = true;
  }
  return result;
}

var updateCurrentFilter = (state) => {
  var gradeSelected = state.chartFilters.tableLoanGrade;
  gradeSelected = gradeSelected === undefined ? 'All' : gradeSelected;
  var statusSelected = state.chartFilters.tableLoanStatus;
  statusSelected = statusSelected === undefined ? 'All' : statusSelected;

  previousFilter = currentFilter;
  currentFilter = {grade: gradeSelected, status: statusSelected};
}

var filterData = (data) => {
    var filteredData;
    if (currentFilter.grade === 'All' && currentFilter.status === 'All') {
      filteredData = data;
    } else {
      filteredData = data.filter(function(item){
          var itemGrade = item.group[0];
          var status = item.group[1];
          if ((currentFilter.grade === 'All' || currentFilter.grade === itemGrade) &&
              (currentFilter.status === 'All' || currentFilter.status === status) ){
            return item;
          }
      });
    }

    return filteredData;
}

const mapStateToProps = (state) => {
    var data;
    updateCurrentFilter(state);
    if (state.chartData.pivotData && state.chartData.pivotData.data) {
      data = filterData(state.chartData.pivotData.data);
    } 
    return {
        grades: state.chartData.gradeData.data,
        filters: state.chartFilters,
        data: data
    }
};

const loadTable = (data) => {
  if (!data) {
    return (
        <div style={{paddingTop: 145, paddingLeft: 370}} ><img src={image} /></div>
    );
  } else {
    return (
        <Pivot 
          items={data}
          isFilterChanged={isFilterChanged()}
        />
    );
  }
}

const VisibleDetails = ({
	data,
  grades,
  filters,
  onGradeSelected,
  onStatusSelected
}) => {
    return (
        <div className='row'>
          <div className='col-md-2' style={{paddingLeft: '40'}}>
            <LoanGradeDropDown
              items={grades}
              onGradeSelected={onGradeSelected}
              filters={filters}
              filterField='tableLoanGrade'
            />
            <div style={{padding:10}}/>
            <LoanStatusDropDown
              onStatusSelected={onStatusSelected}
              filters={filters}
              filterField='tableLoanStatus'
            />
          </div>
          <div className='col-md-10'>
              {loadTable(data)}
          </div>
        </div>
    )
};

export default connect(mapStateToProps,mapDispatchToProps)(VisibleDetails);