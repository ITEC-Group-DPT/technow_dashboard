import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import './barChart.css'

const CustomBarChart = ({
    data,
    width,
    height,
    xAxisName,
    yAxisName,
    barSize,
    barColor,
    yAxisCount }) => {
    return (
        <BarChart
            width={width}
            height={height}
            data={data}
        >

            <XAxis
                dataKey={xAxisName}
                axisLine={false}
                tickLine={false}
            />
            <YAxis
                padding={{ bottom: 15 }}
                tickMargin={20}
                tickCount={yAxisCount}
                axisLine={false}
                tickLine={false}
                allowDecimals={false}
            />

            <Tooltip cursor={{fill: 'rgb(240 240 240)'}} />

            <Bar
                barSize={barSize}
                dataKey={yAxisName}
                fill={barColor}
                animationDuration={1000}
            />

        </BarChart>
    )
}

export default CustomBarChart