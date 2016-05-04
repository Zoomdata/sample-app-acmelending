import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash/core';
import { setLoanGrade } from '../actions'
import Donut  from './Donut';
import image from '../images/loading.gif';

let prevSelection = 'All';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (param) => {
      var currentSelection = param.data.selected 
                              ? param.data.name[0] : 'All';

    	if (currentSelection !==  prevSelection) {
    		prevSelection = currentSelection;
        dispatch(setLoanGrade(currentSelection))
      }
    }
  }
}

const mapStateToProps = (state) => {
    return {
        data: state.chartData.gradeData.data
    }
};

const loadDonut = (data, onClick) => {
  var height = 500;
  var width = height;
  if (!data) {
    return (
        <div style={{padding: 145}} ><img src={image} /></div>
    );
  } else {
    return (
        <div style={{margin:'auto', width:'80%'}}>
          <Donut 
            items={data}
            width={width}
            height={height}
            onClick={onClick}
          />
        </div>
    );
  }
}

var labelStyle = {
  margin: 'auto',
  width: '30%'
};

const VisibleDonut = ({
	data,
  onClick
}) => {
    return (
        <div>
          <div style={labelStyle}>
            <label><h4>Loans by Grade</h4></label>
          </div>
          
          {loadDonut(data, onClick)}

        </div>
    )
};

export default connect(mapStateToProps,mapDispatchToProps)(VisibleDonut);