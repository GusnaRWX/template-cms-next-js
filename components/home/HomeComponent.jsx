import React from 'react'
import PropTypes from 'prop-types'
import Base from '../core/Base'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'
import StatisticChart from '../_shared/StatisticChart'
import { valueForChart, valueForPie } from '@/utils/siteSettings'
import StatisticPie from '../_shared/StatisticPie'

const useStyles = makeStyles({
  paperWrapper: {
    padding: '1rem',
    backgroundColor: '#091827 !important',
    color: '#FFFFFF',
    height: '320px'
  },
  titleLabel: {
    margin: 0,
    color: '#FFFFFF'
  },
  contentLabel: {
    color: '#FFFFFF'
  },
  imageContainer: {
    width: '100%',
    height: '200px',
    borderRadius: '3px',
    marginBottom: '1rem',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    alignSelf: 'center'
  },
  chartTitleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    color: '#fff',
    marginBottom: '1rem'
  }
})

function HomeComponent (props) {
  const classes = useStyles()
  return (
    <Base>
      <Grid container spacing={3} mb={5}>
        <Grid item xs={12} md={12} lg={4} xl={4}>
          <Paper className={classes.paperWrapper}>
            <div className={classes.imageContainer} style={{
              backgroundImage: `url('/images/next-logo.png')`
            }}>
            </div>
            <p className={classes.titleLabel}>Framework</p>
            <Typography variant='body2'>This template cms making with Next JS framework</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={4} xl={4}>
          <Paper className={classes.paperWrapper}>
            <div className={classes.imageContainer} style={{
              backgroundImage: `url('/images/material-ui.png')`
            }}></div>
            <p className={classes.titleLabel}>Components</p>
            <Typography variant='body2'>Component in this CMS using material UI</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={4} xl={4}>
          <Paper className={classes.paperWrapper}>
            <div className={classes.imageContainer} style={{
              backgroundImage: `url('/images/redux-saga.jpeg')`
            }}></div>
            <p className={classes.titleLabel}>State Management</p>
            <Typography variant='body2'>Using Redux Saga and Redux toolkit for state management</Typography>
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.chartTitleWrapper}>
        <h2 className={classes.titleLabel}>Chart</h2>
      </div>
      <Grid container spacing={2} mb={5}>
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <Paper className={classes.paperWrapper}>
            <StatisticChart
              title='Example ChartBar'
              data={valueForChart}
              position='bottom'
              canvasHeight={250}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <Paper className={classes.paperWrapper}>
            <StatisticPie
              title='Example ChartPie'
              data={valueForPie}
              position='bottom'
              canvasHeight={250}
            />
          </Paper>
        </Grid>
      </Grid>
    </Base>
  )
}

HomeComponent.propTypes = {}

export default HomeComponent
