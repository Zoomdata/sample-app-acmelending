import React from 'react';
import { connect } from 'react-redux';
import KPIs from './KPIs';


const mapStateToProps = (state) => {
    return {
        data: state.chartData.kpiData.data,
        filters: state.chartFilters
    }
};

const VisibleKPIs = ({
	data,
  filters
}) => {
    return (
        <div>
            <KPIs 
      				items={data}
              filters={filters}
      			/>
        </div>
    )
};

export default connect(mapStateToProps)(VisibleKPIs);