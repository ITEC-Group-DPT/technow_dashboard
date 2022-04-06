import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const months = [
  {
    num: 1,
    string: 'Jan' 
  },
  {
    num: 2,
    string: 'Feb' 
  },
  {
    num: 3,
    string: 'Mar' 
  },
  {
    num: 4,
    string: 'Apr' 
  },
  {
    num: 5,
    string: 'May' 
  },
  {
    num: 6,
    string: 'Jun' 
  },
  {
    num: 7,
    string: 'Jul' 
  },
  {
    num: 8,
    string: 'Aug' 
  },
  {
    num: 9,
    string: 'Sep' 
  },
  {
    num: 10,
    string: 'Oct' 
  },
  {
    num: 11,
    string: 'Nov' 
  },
  {
    num: 12,
    string: 'Dec' 
  }
]

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