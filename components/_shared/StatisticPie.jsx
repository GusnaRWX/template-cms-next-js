import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import PieChart from '../chart/PieChart'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    padding: 0,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  title: {
    fontSize: '18px',
    lineHeight: '25.2px',
    marginBottom: '1rem'
  }
})

function StatisticPie ({
  title,
  data,
  position,
  canvasHeight
}) {
  const classes = useStyles()
  console.log(data)
  return (
    <>
      <Box className={classes.root}>
        <Typography
          component='span'
          variant='h6'
          className={classes.title}
        >
          <strong>
            {title}
          </strong>
        </Typography>
        <PieChart
          title={title}
          labels={data[0]?.label}
          values={data[0]?.value}
          bgColor={data[0]?.bg_color}
          position={position}
          canvasHeight={canvasHeight}
        />
      </Box>
    </>
  )
}

StatisticPie.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  position: PropTypes.string,
  canvasHeight: PropTypes.number
}

export default StatisticPie
