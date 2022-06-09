import React from 'react';
import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = props => {
    const
        {
            dataPoints
        } = props,
        dataPointValues = dataPoints.map(dataPoint => dataPoint.value),
        totalMaximum = Math.max(...dataPointValues);
    return (
        <div className="chart">
            {
                dataPoints.map(dataPoint => (
                    <ChartBar
                        key={dataPoint.label}
                        label={dataPoint.label}
                        maxValue={totalMaximum}
                        value={dataPoint.value}
                    />
                ))
            }
        </div>
    )
};

export default Chart;