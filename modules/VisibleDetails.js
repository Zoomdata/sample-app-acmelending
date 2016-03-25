import React from 'react';
import { connect } from 'react-redux';
import Pivot from './Pivot';


const mapStateToProps = (state) => {

    var result;
    if (state.chartData.pivotData === undefined) {
      result = undefined;
    } else {
      result = state.chartData.pivotData.data;
    }

    return {
        data: result
    }
};


const VisibleDetails = ({
	data,
  totals,
  filters
}) => {
    return (
        <div className='row'>
          <div className='col-md-12'>
            <Pivot 
      				items={data}
      			/>
          </div>
        </div>
    )
};

export default connect(mapStateToProps)(VisibleDetails);