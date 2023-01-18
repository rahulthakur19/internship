import React, { Component } from 'react'
import Chart from 'react-google-charts'
const pieData = [
  ['Categories', 'Amount'],
  ['electronics', 6],
  ['Mens Clothing', 4],
  ['womens clothing', 6],
  ['jewelery', 4]
]
const pieOptions = {
  title: 'Product Statistics',
  pieHole: 0.4,
}
class PieChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>Product Statistics</h2>
        <Chart
          width={'600px'}
          height={'320px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={pieData}
          options={pieOptions}
          rootProps={{ 'data-testid': '3' }}
        />
      </div>
    )
  }
}
export default PieChart