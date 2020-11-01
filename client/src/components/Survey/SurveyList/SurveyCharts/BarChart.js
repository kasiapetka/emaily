import React from 'react'
import { Chart } from 'react-charts'

const BarChart =()=> {
    const data = React.useMemo(
        () => [
            {
                data: [['A', 1], ['V', 2], ['B', 4], ['N', 2], ['F', 7]]
            }
        ],
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'ordinal', position: 'bottom' },
            { position: 'left', type: 'linear', stacked: false }
        ],
        []
    );
    const series = React.useMemo(
        () => ({
            type: 'bar'
        }),
        []
    );
  return (
        // A react-chart hyper-responsively and continuously fills the available
        // space of its parent element automatically
        <div
            style={{
                width: '400px',
                height: '300px'
            }}
        >
            <Chart data={data} series={series} axes={axes} />
        </div>
    )
};
export default BarChart;
