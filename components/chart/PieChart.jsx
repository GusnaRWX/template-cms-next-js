import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { Chart, registerables } from 'chart.js'

export default class PieChart extends Component {
  static propTypes = {
    title: PropTypes.string,
    labels: PropTypes.array,
    values: PropTypes.array,
    bgColor: PropTypes.array,
    position: PropTypes.string,
    canvasHeight: PropTypes.number
  }

  static defaultProps = {
    canvasHeight: 100
  }

  constructor (props) {
    super(props)
    this.chartRef = createRef()
    this.chart = undefined
    this.dataVisibility = this.dataVisibility.bind(this)
  }
  componentDidMount () {
    Chart.register(...registerables)
    const data = {
      labels: this.props.labels,
      datasets: [{
        label: this.props.title,
        data: this.props.values,
        backgroundColor: this.props.bgColor,
        hoverOffset: 4
      }]
    }

    this.chart = new Chart(this.chartRef.current, {
      type: 'pie',
      data: data,
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    })
  }

  dataVisibility (index) {
    this.chart.toggleDataVisibility(index)
    this.chart.update()
  }

  componentDidUpdate (prev) {
    if (this.props !== prev) {
      this.chart.destroy()
      const data = {
        labels: this.props.labels,
        datasets: [{
          label: this.props.title,
          data: this.props.values,
          backgroundColor: this.props.bgColor,
          hoverOffset: 4
        }]
      }

      this.chart = new Chart(this.chartRef.current, {
        type: 'pie',
        data: data,
        options: {
          plugins: {
            legend: {
              display: false
            }
          },
          responsive: true,
          maintainAspectRatio: false
        }
      })
    }
  }
  render () {
    return (
      <>
        {
          this.props.position === 'left' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                justifyContent: 'space-between'
              }}
            >
              <div
                style={{
                  float: 'left',
                  minWidth: '50px',
                  textAlign: 'left',
                  width: '70%',
                  marginRight: '1rem'
                }}
              >
                <canvas ref={this.chartRef} width={this.props.canvasHeight} height={this.props.canvasHeight}></canvas>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%'
                }}
              >
                {
                  this.props.labels.length > 0 && (
                    this.props.labels.map((item, index) => {
                      <div key={index}
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            cursor: 'pointer',
                            width: '100%'
                          }}
                          onClick={() => { this.dataVisibility(index) }}
                        >
                          <div style={{ width: '100%', height: 'auto', maxWidth: '10px', minHeight: '10px', backgroundColor: this.props.bgColor[index], marginRight: '.5rem' }}></div>
                          <p style={{ fontSize: '12pt', width: '100%', margin: 0 }}>{item}</p>
                        </div>
                        <p style={{ fontSize: '12pt', margin: 0 }}>
                          {this.props.values[index]}
                        </p>
                      </div>
                    })
                  )
                }
              </div>
            </div>
          )
        }
        {
          this.props.position === 'bottom' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                justifyContent: 'space-between'
              }}
            >
              <div style={{
                float: 'center',
                minWidth: '50px',
                textAlign: 'left',
                width: '100%'
              }}>
                <canvas ref={this.chartRef} height={this.props.canvasHeight}></canvas>
              </div>
              {/* <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%'
                }}
              >
                {
                  this.props.labels.length > 0 && (
                    this.props.labels.map((item, index) => (
                      <div key={index}
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <div
                          onClick={() => { this.dataVisibility(index) }}
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            cursor: 'pointer',
                            width: '100%'
                          }}
                        >
                          <div style={{ width: '100%', height: 'auto', maxWidth: '10px', minHeight: '10px', backgroundColor: this.props.bgColor[index], marginRight: '.5rem' }}></div>
                          <p style={{ margin: 0, fontSize: '12pt', width: '100%' }}>{item}</p>
                        </div>
                        <p style={{ fontSize: '12pt', margin: 0 }}>
                          {this.props.values[index]}
                        </p>
                      </div>
                    ))
                  )
                }
              </div> */}
            </div>
          )
        }
      </>
    )
  }
}
