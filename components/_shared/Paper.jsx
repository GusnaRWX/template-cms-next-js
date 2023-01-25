import React from 'react'
import { Paper as MuiPaper } from '@mui/material'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#091827',
        padding: '1rem'
    }
})

function Paper ({
    children
}) {
    const classes = useStyles()
    return (
        <MuiPaper className={classes.root} elevation={6}>
            {children}
        </MuiPaper>
    )
}

Paper.propTypes = {
    children: PropTypes.node
}

export default Paper