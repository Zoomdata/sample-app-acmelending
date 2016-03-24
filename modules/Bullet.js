import React, { Component } from 'react';
var numeral = require('numeral');
var ReactHighcharts = require('react-highcharts');


export default class Bullet extends Component {

    configuration() {
        var config = {
            chart:{
                height: 56,
                width: 450,
                type:'bar',
                margin:[5,15,10,100]
            },
            credits:{enabled:false},
            exporting:{enabled:false},
            legend:{enabled:false},
            title:{text:''},
            xAxis:{
                tickLength:0,
                lineColor:'#999',
                lineWidth:1,
                categories:[],
                labels: { style: {
                            fontWeight:'bold',
                            width: 300
                          }
                        }        
            },
            yAxis:{
                min:0,
                minPadding:0,
                maxPadding:0,
                tickColor:'#ccc',
                tickWidth:1,
                tickLength:3,
                gridLineWidth:0,
                endOnTick:true,
                title:{text: ''},
                labels:{
                    y:10,
                    style:{
                        fontSize:'8px'
                    },
                    formatter:function(){
                        if (this.isLast){
                            return this.value + ' %';
                        }
                        else{
                            return this.value;
                        }
                    }
                },
                max:100,
                plotBands:[{from:0,to:70,color: 'rgba(103,103,103,.35)'},
                           {from:70,to:85,color: 'rgba(153,153,153,.35)'},
                           {from:85,to:100,color: 'rgba(204,204,204,.35)'}]
            },
            tooltip:{
                enabled:true,
                backgroundColor:'rgba(255, 255, 255, .85)',
                borderWidth:0,
                shadow:true,
                style: {fontSize:'10px',padding:2},
                formatter:function() {
                   return this.series.name + ": <strong>" 
                            + numeral(this.y).format('0,0') + "%</strong>";
                }
            },
            plotOptions:{
                bar:{
                    color:'#000',
                    shadow:false,
                    borderWidth:0,
                },
                scatter:{
                    marker:{
                        symbol:'line',
                        lineWidth:3,
                        radius:8,
                        lineColor:'#000'
                    }
                }
            },
            series:[]
        }
        return config;
    }

	render() {
        var config = this.configuration();
        var measure = {
            name:this.props.title,
            pointWidth:10,
            data:[this.props.measure]
        }
        var target = {
            name:'Target',
            type: 'scatter',
            data:[this.props.target]
        }
        // todo: adding target causes a js exception.  It seems an attribute is missing there.
        config.series = [measure];

        config.xAxis.categories = [this.props.title];

        return (
            <div>
                <ReactHighcharts config={config} ref='chart'></ReactHighcharts>		
            </div>
        )
	}
}