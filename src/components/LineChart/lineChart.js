import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import './lineChart.css'

const CustomLineChart = ({
    data,
    width,
    height,
    xAxisName,
    yAxisName,
    lineColor,
    yAxisCount }) => {
    return (
        <LineChart
            style={{margin:'auto',paddingRight:"20px"}}
            width={width}
            height={height}
            data={data}
        >

            <CartesianGrid vertical={false} />

            <XAxis
                dataKey={xAxisName}
                padding={{ left: 0}}
                axisLine={false}
                tickLine={false}
            />
            <YAxis
                padding={{ bottom: 15 }}
                tickMargin={20}
                tickCount={yAxisCount}
                domain={[0, 'dataMax + 10']}
                axisLine={false}
                tickLine={false}
            />

            <Tooltip />

            <Line
                dataKey={yAxisName}
                stroke={lineColor}
                strokeWidth={2}
                dot={{ fill: lineColor, strokeWidth: 1, r: 3}}
                activeDot={{ r: 6 }}
                animationDuration={1000}
                />

        </LineChart>
    )
}

export default CustomLineChart