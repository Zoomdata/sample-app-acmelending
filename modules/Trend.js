// modules/Trend.js
import React, { Component } from 'react';
var ReactDOM = require('react-dom');
var echarts = require('echarts');
var ecConfig=require('echarts');
var moment = require('moment');
var numeral = require('numeral');

import { WindowResizeListener } from 'react-window-resize-listener'

var domElement;

/**
 * Trend is a react component that renders a trend visualization by integrating
 * ECharts. 
 */
export default class Trend extends Component {

	/**
	 * Obtains the DIV element rendered inthe render() function and initializes
	 * ECharts with it.
	 */
	createChart() {
	    // Initialize after dom ready
	    domElement = ReactDOM.findDOMNode(this);
	    this.chart = echarts.init(domElement);
	    this.updateChart(this.props);
  	}

  	updateChart(nextProps) {
		// give up quickly if props are empty.
		if (!nextProps) {
			return null;
		}
		var newChartOptions = this.makeChartOptions(nextProps);
		this.chart.setOption(newChartOptions);

		this.chart.on('CLICK', nextProps.onClick);
	}


	makeChartOptions(nextProps) {
		var items;
		if (!this.props.items) {
			items = [];
		} else {
			items = this.props.items;
		}

		var xAxis = items.map(function(item) {
			return moment(item.group[0]).utcOffset(0).format('MMM YYYY');
		});
		var yAxis1 = items.map(function(item) {
			return item.current.metrics.loan_amnt.sum.toFixed(0);
		});
		var yAxis2 = items.map(function(item) {
			return item.current.metrics.total_pymnt.sum.toFixed(0);
		});

		var option = {
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		    	show: true,
		    	data: ['Loan Amount','Total Payment']
		    },
		    toolbox: {
		        show : false
		    },
			grid: {
				x: 90,
				y: 30,
				x2: 20,
				y2: 70
			},
		    calculable : true,
		    dataZoom : {
		        show : true,
		        realtime : false,
		        start : 0,
		        end : 100
		    },
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : true,
		            data : xAxis
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLabel: {
		            	formatter: function (v) {
		            		var result;
		            		if (v > 99999) {
		            			result = '$' + numeral(v/1000).format('0,0') + ' k';
		            		} else {
		            			result = '$' + numeral(v).format('0,0');
		            		}
		            		return result;
		                }
		            }

		        }
		    ],
		    series : [
		        {
		            name:'Loan Amount',
		            type:'line',
		            data: yAxis1
		        },
		        {
		            name:'Total Payment',
		            type:'bar',
		            data: yAxis2
		        }
		    ]
		};
		
		return option;
	}

	componentWillMount() {
    	WindowResizeListener.DEBOUNCE_TIME = 10;	
	}

	/**
	 * To integrate ECharts, it creates the chart after this react component is mounted and its DIV
	 * exists in the DOM.
	 */
	componentDidMount() {
    	this.createChart();

  	}

	componentWillUnmount() {
		this.chart.dispose();
	}

	componentDidUpdate() {
		this.updateChart(this.props);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	componentWillReceiveProps(nextProps) {
		this.updateChart(nextProps);
	}

	obtainWidth(windowWidth) {
		var width = windowWidth-this.props.widthMargin;

		return width < 500 ? 500 : width;
	}

	obtainHeight(windowWidth) {
		return this.obtainWidth(windowWidth) / this.props.heightRatio;
	}

	/**
	 * Renders a div which will be used to render the chart after this react component is 
	 * mounted.  See componentDidMount() component life cycle method.  This method also 
	 * contains the WindowResizeListener component to handle window resize events which should
	 * resize the trend visualization.
	 */
	render(){
		var windowWidth = this.obtainWidth(window.innerWidth)
		var windowHeight = this.obtainHeight(window.innerWidth);
	  	return (
			<div style={{height: windowHeight, width: windowWidth}} >
			    <WindowResizeListener onResize={windowSize => {
			    	if (domElement !== undefined) {
			    		var width = this.obtainWidth(windowSize.windowWidth);
			    		var height = this.obtainHeight(windowSize.windowWidth);
				    	domElement.style.width = width + 'px';
				    	domElement.style.height = height + 'px';
				    	
				    	this.chart.resize();			    		
			    	}
			    }}/>
			</div>
    	)
	}

}
