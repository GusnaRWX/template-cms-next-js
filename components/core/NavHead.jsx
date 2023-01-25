import React from 'react'
import PropTypes from 'prop-types'
import { styled, useTheme } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { IconButton, Toolbar, InputBase, ListItemButton } from '@mui/material'
import { makeStyles } from '@mui/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SettingsIcon from '@mui/icons-material/Settings';


const ButtonWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: '.5rem',
  paddingRight: '.5rem',
  margin: 0,
  cursor: 'pointer',
  borderRadius: '6px',
  gap: '6px',
  '&:hover': {
    backgroundColor: '#222c38',
    color: '#67b2ff'
  },
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const ButtonSmWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'flex'
  },
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))


const useStyles = makeStyles((theme) => ({
  navWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  searchWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '6px'
  },
  optionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '6px',
    padding: '.5rem'
  },
  // buttonWrapper: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingLeft: '.5rem',
  //   paddingRight: '.5rem',
  //   margin: 0,
  //   borderRadius: '6px',
  //   gap: '6px',
  //   '&:hover': {
  //     backgroundColor: '#222c38',
  //     color: '#67b2ff'
  //   }
  // }
}))

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: 'rgba(9, 24, 39, .9)',
  backdropFilter: 'blur(5px)',
  color: '#fff',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

function NavHead ({ open, onDrawerOpen }) {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <AppBar position='fixed' open={open}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={onDrawerOpen}
          edge='start'
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' })
          }}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.navWrapper}>
          <div className={classes.searchWrapper}>
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                color: '#fff',
                '&.MuiInputBase-root': {
                  '&.Mui-focused': {
                    borderBottom: '1px solid #8D72E1'
                  }
                }
              }}
              placeholder='Search'
              inputProps={{ 'aria-label': 'Search' }}
            />
            <IconButton
              sx={{ color: '#fff', '&:hover': { color: '#67b2ff' } }}>
              <SearchIcon />
            </IconButton>
          </div>
          <div className={classes.optionWrapper}>
            <IconButton
              sx={{
                color: '#fff',
                '&:hover': {
                  color: '#67b2ff'
                }
              }}
            >
              <NotificationsNoneIcon />
            </IconButton>
            <ButtonWrapper>
              <SettingsIcon />
              <p>Settings</p>
              <KeyboardArrowDownIcon />
            </ButtonWrapper>
            <ButtonSmWrapper>
              <IconButton
                sx={{
                  color: '#fff'
                }}
              >
                <SettingsIcon />
              </IconButton>
            </ButtonSmWrapper>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  )
}

NavHead.propTypes = {
  open: PropTypes.bool,
  onDrawerOpen: PropTypes.func
}

export default NavHead
