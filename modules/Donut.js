import React, { Component } from 'react';
var ReactDOM = require('react-dom');
var echarts = require('echarts');
import { WindowResizeListener } from 'react-window-resize-listener'

var domElement;

var Donut = React.createClass({

	render(){
		var windowWidth = this.obtainWidth(window.innerWidth)
		var windowHeight = this.obtainHeight(window.innerWidth);
	  	return (
			<div style={{height: windowHeight, width: windowWidth}}>
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
	},

	shouldComponentUpdate: function() {
		return false;
	},

	createChart: function() {
	    // Initialize after dom ready
	    domElement = ReactDOM.findDOMNode(this);
	    this.chart = echarts.init(domElement);
	    this.updateChart(this.props);
  	},

  	updateChart: function(props) {
		// give up quickly if props are empty.
		if (!props) {
			return null;
		}
		var newChartOptions = this.makeChartOptions(props);
		this.chart.setOption(newChartOptions);

		this.chart.on('CLICK', props.onClick);
	},

	makeChartOptions: function(props) {

		var items;
		if (!props.items) {
			items = [];
		} else {
			items = props.items;
		}
		var data = items.map(function(item) {
			var elem = {
				name: item.group,
				value: item.current.count
			}
			return elem;
		});
		var labels = items.map(function(item) {
			return item.group;
		});

		var option = {
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		    	show: false,
		        orient : 'vertical',
		        x : 'left',
		        y : 'top',
		        data: labels
		    },
		    toolbox: {
		        show : false
		    },
		    calculable : false,
		    series : [
		        {
		            name:'Loan Grade',
		            type:'pie',
		            selectedMode: 'single',
		            radius : ['50%', '80%'],
		            itemStyle : {
		                normal : {
		                    label : {
		                        show : true
		                    },
		                    labelLine : {
		                        show : true
		                    }
		                },
		                emphasis : {
		                    label : {
		                        show : true,
		                        position : 'center',
		                        textStyle : {
		                            fontSize : '30',
		                            fontWeight : 'bold'
		                        }
		                    }
		                }
		            },
	                data: data
	            }

			]
		};
		
		return option;
	},

	componentDidMount: function() {
    	this.createChart();
  	},

	componentWillMount() {
    	WindowResizeListener.DEBOUNCE_TIME = 10;	
	},

	componentWillUnmount: function() {
		this.chart.dispose();
	},

	obtainWidth(windowWidth) {
		var width = windowWidth-this.props.widthMargin;

		return width < 318 ? 318 : width;
	},

	obtainHeight(windowWidth) {
		return this.obtainWidth(windowWidth) / this.props.heightRatio;
	}
}
);

module.exports = Donut;

