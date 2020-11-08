import React from 'react'
import { Chart } from 'react-charts'

const BarChart =({answers})=> {
    const d = answers.map(a => [a.value, a.count]);
    console.log(d)

    const data = React.useMemo(
        () => [
            {
                data: [...d]
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
                height: '300px',
            }}
        >
            <Chart data={data} series={series} axes={axes} />
        </div>
    )
};
export default BarChart;
