import React from 'react'
import { makeStyles } from '@mui/styles'
import Container from '@mui/material/Container'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  container: {
    paddingTop: '100px',
    paddingLeft: '10px',
    paddingRight: '10px'
  }
})

function Base ({
  children
}) {
  const classes = useStyles()
  return (
    <Container
      className={classes.container}
    >
      {children}
    </Container>
  )
}

Base.propTypes = {
  children: PropTypes.node
}

export default Base
