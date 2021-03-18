import React from 'react'
import {XYPlot, XAxis, YAxis,VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';

function Chart() {
    const data=[
        {x : 0 , y : 8},
        {x : 1 , y : 5},
        {x : 2 , y : 4},
        {x : 3 , y : 9},
        {x : 4 , y : 6},
        {x : 5 , y : 4},
        {x : 6 , y : 2},
        {x : 7 , y : 3},
        {x : 8 , y : 7},
        {x : 9 , y : 5},
        {x : 10 , y : 2},

    ]
    return (
        <div style={{marginTop:"15px"}}>
        <XYPlot height={300} width={300}>
            <HorizontalGridLines/>
            <VerticalGridLines/>
            <XAxis/>
            <YAxis/>
            <LineSeries data={data} colors="red"/>
            <LineSeries data={data} colors="purple"/>
            <LineSeries data={data} colors="yellow"/>

        </XYPlot>
            
        </div>
    )
}

export default Chart
