import React from 'react';
import { connect } from 'react-redux';
import KPIs from './KPIs';
import image from '../images/loading.gif';

/**
 * VisibleKPIs wraps the KPIs component.  It also uses react-redux to connect 
 * KPIs with the application state (mapStateToProps). 
 */
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

const loadKPIs = (data, totals, filters) => {
  if (!totals) {
    return (
        <div style={{padding: 145}} ><img src={image} /></div>
    );
  } else {
    return (
            <KPIs 
              items={data}
              totals={totals}
              filters={filters}
            />
    );
  }
}


const VisibleKPIs = ({
	data,
  totals,
  filters
}) => {
    return (
        <div style={kpisBlockStyle}>
          {loadKPIs(data, totals, filters)}
        </div>
    )
};

export default connect(mapStateToProps)(VisibleKPIs);