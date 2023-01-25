import React from 'react'
import PropTypes from 'prop-types'
import { TextField as MuiTextField } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    root: {
        marginBottom: '1rem',
        '& .MuiInputBase-root': {
            color: '#FFFFFF',
            '& fieldset': {
                borderColor: '#FFFFFF',
                color: '#FFFFFF'
            },
            '&:hover fieldset': {
                borderColor: '#8D72E1 !important'
            }
            ,
            fontSize: '1.125rem',
            '& .Mui-focused fieldset': {
                borderColor: '#8D72E1 !important'
            }
        },
        '& .MuiInputLabel-root': {
            color: '#909090'
        },
        '& label.Mui-focused': {
            color: '#8D72E1 !important'
        }
    },
    error: {
        marginBottom: '1rem',
        '& .MuiInputBase-root': {
            color: '#DF1642',
            '& fieldset': {
                borderColor: '#DF1642',
                color: '#DF1642'
            },
            '&:hover fieldset': {
                borderColor: '#DF1642 !important'
            }
            ,
            fontSize: '1.125rem',
            '& .Mui-focused fieldset': {
                borderColor: '#DF1642 !important'
            }
        },
        '& .MuiInputLabel-root': {
            color: '#909090'
        },
        '& label.Mui-focused': {
            color: '#DF1642 !important'
        }
    }
})

function Textfield ({
    name,
    label,
    value,
    autoComplete = 'off',
    variant,
    type,
    error = null,
    onChange,
    endAdornment,
    size,
    ...otherProps
}) {
    const classes = useStyles()
    return (
        <MuiTextField
            margin='dense'
            variant={variant || 'outlined'}
            name={name}
            label={label}
            type={type}
            size={size || 'small'}
            value={value}
            onChange={onChange}
            fullWidth
            autoComplete={autoComplete}
            {...otherProps}
            {...(error && { error: true, helperText: error })}
            className={error ? classes.error : classes.root}
            InputProps={{
                endAdornment: endAdornment
            }}
        />
    )
}

Textfield.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.any,
    autoComplete: PropTypes.string,
    variant: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.any,
    onChange: PropTypes.func,
    size: PropTypes.string,
    endAdornment: PropTypes.any
}

export default Textfield
