import React, { Component } from 'react';
var ReactDOM = require('react-dom');
var numeral = require('numeral');
var ReactHighcharts = require('react-highcharts');
import { FilterStatuses } from '../actions'
import Bullet from './Bullet';


var canRender = false;

export default class KPIs extends Component {

    componentWillReceiveProps(nextProps) {
		if (nextProps.totals) {
			canRender = true;
		}
	}

	render() {
		var items;
		if (!this.props.items) {
			items = [];
		} else {
			items = this.props.items;
		}

		var totals;
		if (!this.props.totals) {
			totals = [];
		} else {
			totals = this.props.totals;
		}		

		var itemGroup, portfolioPercent = 0, osPercent = 0, 
			defaultPropense = 0, delinqRecency = 0, totalLoans = 0;

		if (!this.props.filters.loanGrade) {
			itemGroup = 'All';
		} else {
			itemGroup = this.props.filters.loanGrade;
		}

		if (itemGroup === 'All') {
			for (let total of totals) {
				totalLoans = total.current.count;
				portfolioPercent = total.current.metrics.calc_portfolio.calc;
				osPercent = total.current.metrics.calc_o_s.calc;
				defaultPropense = total.current.metrics.calc_default_propensity.calc;
				delinqRecency = total.current.metrics.calc_delinquency_recency.calc;
			}
		} else {
			for (let item of items) {
				if (item.group[0] == itemGroup) {
					totalLoans = item.current.count;
					portfolioPercent = item.current.metrics.calc_portfolio.calc;
					osPercent = item.current.metrics.calc_o_s.calc;
					defaultPropense = item.current.metrics.calc_default_propensity.calc;
					delinqRecency = item.current.metrics.calc_delinquency_recency.calc;
				}
			};
		}

	  	if (canRender === true) {
	  		return (
				<div>
                    <div style={{padding:10}}/>
                    <Bullet
                        title='% Portfolio'
                        measure={portfolioPercent}
                        target={portfolioPercent}              
                    />
                    <div style={{padding:10}}/>
                    <Bullet
                        title='% O/S'
                        measure={osPercent}
                        target={osPercent}              
                    />
                    <div style={{padding:10}}/>
                    <Bullet
                        title='Deflt Propens'
                        measure={defaultPropense}
                        target={defaultPropense}              
                    />
                    <div style={{padding:10}}/>
                    <Bullet
                        title='Delinq Recency'
                        measure={delinqRecency}
                        target={delinqRecency}              
                    />  		
				</div>
			)  			
	  	} else {
	  		return (
				<div></div>
			) 
	  	}
	}
}
