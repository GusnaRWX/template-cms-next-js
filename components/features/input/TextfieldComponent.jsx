import React, { useState } from 'react'
import Base from '@/components/core/Base'
import { Paper, Textfield } from '@/components/_shared'
import { makeStyles } from '@mui/styles'
import { Box, InputAdornment, IconButton } from '@mui/material'
import { useForm } from 'hooks/index'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const useStyles = makeStyles({
    headerWrapper: {
        marginBottom: '1rem'
    },
    headerTitle: {
        color: '#FFFFFF',
        margin: 0
    }
})

function TextfieldComponent () {
    const classes = useStyles()
    const [initialValues, setInitialValues] = useState({
        textfield1: '',
        password: '',
        numbers: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show)
    const validate = (fieldOfValue = values) => {
        const temp = { ...errors }

        if ('textfield1' in fieldOfValue) {
            temp.textfield1 = fieldOfValue.textfield1 ? '' : 'textfield1 cannot be empty'
        }
        if ('password' in fieldOfValue)
            temp.password = fieldOfValue.password ? '' : 'password cannot be empty'

        if ('numbers' in fieldOfValue)
            temp.numbers = fieldOfValue.numbers ? '' : 'Numbers cannot be empty'

        setErrors({
            ...temp
        })

        if (fieldOfValue === values)
            return Object.values(temp).every(x => x === '')
    }

    const {
        values,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialValues, true, validate)
    return (
        <Base>
            <Paper>
                <Box className={classes.headerWrapper}>
                    <h2 className={classes.headerTitle}>Textfield Component</h2>
                </Box>
                <Box className={classes.headerWrapper}>
                    <p className={classes.headerTitle}>This page described how to using textfield in template cms. the textfield using basic material ui with variant textfield is outlined</p>
                </Box>
                <Box className={classes.headerWrapper}>
                    <p className={classes.headerTitle}>
                        Textfield with type text :
                    </p>
                </Box>
                <Textfield
                    id='textfield1'
                    data-test={`textfield`}
                    variant='outlined'
                    name='textfield1'
                    value={values.textfield1}
                    type='text'
                    onChange={handleInputChange}
                    error={errors.textfield1}
                    size='small'
                    label='textfield-1'
                />
                <Box className={classes.headerWrapper}>
                    <p className={classes.headerTitle}>
                        Textfield with type password :
                    </p>
                </Box>
                <Textfield
                    id='password'
                    variant='outlined'
                    name='password'
                    data-test={`password`}
                    value={values.password}
                    type={showPassword ? 'text' : 'password'}
                    onChange={handleInputChange}
                    error={errors.password}
                    size='small'
                    label='password'
                    autoComplete='current-password'
                    endAdornment={
                        <InputAdornment position='end'>
                            <IconButton
                                id='show-password'
                                edge='end'
                                onClick={() => handleClickShowPassword()}
                            >
                                {
                                    showPassword
                                        ? <VisibilityOff style={{ color: '#FFFFFF' }} />
                                        : <Visibility style={{ color: '#FFFFFF' }} />
                                }
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <Box className={classes.headerWrapper}>
                    <p className={classes.headerTitle}>
                        Textfield with type number :
                    </p>
                </Box>
                <Textfield
                    id='numbers'
                    data-test={`numbers`}
                    variant='outlined'
                    name='numbers'
                    value={values.numbers}
                    type='number'
                    onChange={handleInputChange}
                    error={errors.numbers}
                    size='small'
                    label='Numbers'
                />
            </Paper>
        </Base>

    )
}

export default TextfieldComponent
