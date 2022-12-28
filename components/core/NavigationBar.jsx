import React, { useState } from 'react'
import NavHead from './NavHead'
import Drawer from './Drawer'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  main: {
    flexGrow: 1,
    p: 3,
    backgroundColor: '#1d293a',
    height: '100vh',
    overflow: 'auto',
  }
})

function NavigationBar ({ children }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Box className={classes.root}>
      <NavHead
        open={open}
        onDrawerOpen={handleOpen}
      />
      <Drawer
        open={open}
        onDrawerClose={handleClose}
        onDrawerOpen={handleOpen}
      />
      <Box component="main" className={classes.main}>
        {children}
      </Box>
    </Box>
  )
}

NavigationBar.propTypes = {
  children: PropTypes.any
}

export default NavigationBar
