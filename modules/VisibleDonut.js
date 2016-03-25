import React from 'react';
import { connect } from 'react-redux';
import { setLoanGrade } from '../actions'
import Donut  from './Donut';
import _ from 'lodash/core';

let prevParam;

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (param) => {
    	if (!_.isEqual(param, prevParam)) {
    		prevParam = param;
        dispatch(setLoanGrade(param))
      }
    }
  }
}

const mapStateToProps = (state) => {
    return {
        data: state.chartData.gradeData.data
    }
};

var labelStyle = {
  margin: 'auto',
  width: '70%'
};

const VisibleDonut = ({
	data,
  onClick
}) => {
	var height = 500;
	var width = height * 1.2; //golden ratio
    return (
        <div>
          <div style={labelStyle}>
            <label><h4>Select a pie slice to explore associated KPIs</h4></label>
          </div>
          
        	<Donut 
      				items={data}
      				width={width}
      				height={height}
      				onClick={onClick}
    			/>
        </div>
    )
};

export default connect(mapStateToProps,mapDispatchToProps)(VisibleDonut);