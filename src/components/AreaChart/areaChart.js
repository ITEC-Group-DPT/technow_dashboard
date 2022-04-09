import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const customAreaChart = ({
    data,
    width,
    height,
    style,
    xAxisName,
    yAxisName,
    lineColor,
    areaColor,
    yAxisCount }) => {

    if (data.length == 0) return <></>

    return (
        <AreaChart
            width={width}
            height={height}
            data={data}
            style={style}
        >

            <CartesianGrid vertical={false} />

            <XAxis
                dataKey={xAxisName}
                padding={{ left: 20 }}
                axisLine={false}
                tickLine={false} />
            <YAxis
                padding={{ bottom: 15 }}
                tickMargin={20}
                tickCount={yAxisCount}
                axisLine={false}
                tickLine={false}
                allowDecimals={false}
                interval={0}
            />


            <Tooltip />

            <Area
                dataKey={yAxisName}
                stroke={lineColor}
                strokeWidth={2}
                fill={areaColor}
                dot={{ fill: lineColor, strokeWidth: 1, r: 3 }}
                activeDot={{ r: 6 }}
                animationDuration={1000}
            />

        </AreaChart>
    )
}

export default customAreaChart