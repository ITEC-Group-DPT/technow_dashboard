import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const customAreaChart = ({
  data,
  width,
  height,
  xAxisName,
  yAxisName,
  lineColor,
  areaColor,
  yAxisCount }) => {
  return (
    <AreaChart
      width={width}
      height={height}
      data={data}
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
        tickLine={false} />

      <Tooltip />

      <Area
        dataKey={yAxisName}
        stroke={lineColor}
        strokeWidth={2}
        fill={areaColor}
        dot={{ fill: lineColor, strokeWidth: 1, r: 3}}
        activeDot={{ r: 6 }}
        animationDuration={1000}
      />

    </AreaChart>
  )
}

export default customAreaChart