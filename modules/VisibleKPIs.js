import React from 'react';
import { connect } from 'react-redux';
import KPIs from './KPIs';


const mapStateToProps = (state) => {
    var totals;
    if (state.chartData.kpiTotals === undefined) {
      totals = undefined;
    } else {
      totals = state.chartData.kpiTotals.data;
    }
    return {
        data: state.chartData.kpiData.data,
        totals: totals,
        filters: state.chartFilters
    }
};

var kpisBlockStyle = {
  paddingLeft: '30',
  paddingTop: '10',
  paddingRight: '30'
};


const VisibleKPIs = ({
	data,
  totals,
  filters
}) => {
    return (
        <div style={kpisBlockStyle}>
            <KPIs 
      				items={data}
              totals={totals}
              filters={filters}
      			/>
        </div>
    )
};

export default connect(mapStateToProps)(VisibleKPIs);