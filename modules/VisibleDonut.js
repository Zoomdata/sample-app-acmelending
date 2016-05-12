import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash/core';
import { setLoanGrade } from '../actions'
import Donut  from './Donut';
import image from '../images/loading.gif';

let prevSelection = 'All';

/**
 * VisibleDonut wraps the Donut component.  It also uses react-redux to connect VisibleDonut 
 * with the application state (mapStateToProps) and with mapDispatchToProps to allow it to 
 * dispatch Redux actions when users click on Donut slices. 
 */
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
  if (!data) {
    return (
        <div style={{padding: 145}} ><img src={image} /></div>
    );
  } else {
    var widthMargin = 750;
    var heightRatio = 1;
    return (
        <div className='row' style={{margin:'auto', autowidth:'80%'}}>
          <div className='col-md-12' style={{paddingLeft: 100}}>
            <div><h4 style={{textAlign: 'center'}}>Loans by Grade</h4></div>
            <Donut 
              items={data}
              widthMargin={widthMargin}
              heightRatio={heightRatio}
              onClick={onClick}
            />
          </div>
        </div>
    );
  }
}

var labelStyle = {
  margin: 'auto',
  width: '300'
};

const VisibleDonut = ({
	data,
  onClick
}) => {
    return (
        <div >          
          {loadDonut(data, onClick)}
        </div>
    )
};

export default connect(mapStateToProps,mapDispatchToProps)(VisibleDonut);