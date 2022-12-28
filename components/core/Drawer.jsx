import React from 'react'
import PropTypes from 'prop-types'
import { styled, useTheme } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import NavigationList from './NavigationList'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  listItemWrapper: {
    marginBottom: '1rem'
  },
  avatarWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: '1.5rem',
    paddingBottom: '1rem',
    gap: '10px',
  },
  avatarWrapperNone: {
    display: 'none'
  },
  labelWrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  titleWrapper: {
    marginLeft: '1.5rem',
    color: '#67b2ff',
    fontWeight: 'bold'
  }
})

const drawerWidth = 240

const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: 'rgba(9, 24, 39, 1)',
  color: '#fff',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  backgroundColor: 'rgba(9, 24, 39, 1)',
  color: '#fff',
  width: `calc(${theme.spacing(7)}+ 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  },
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 1),
  ...theme.mixins.toolbar,
}))

const DrawerWrapper = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: 'rgba(9, 24, 39, 1)',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme)
    })
  })
)

function Drawer ({
  open,
  onDrawerClose,
  onDrawerOpen
}) {
  const theme = useTheme()
  const classes = useStyles()
  return (
    <DrawerWrapper variant="permanent" open={open}>
      <DrawerHeader>
        <div style={{ paddingLeft: '1rem' }}>
          <h4>Gusna CMS Template</h4>
        </div>
        <IconButton onClick={onDrawerClose} style={{ color: '#fff' }}>
          {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </DrawerHeader>
      <div className={open ? classes.avatarWrapper : classes.avatarWrapperNone}>
        <Avatar src='/images/person-default.jpg' alt='person' sx={{ height: 50, width: 50 }} />
        <div className={classes.labelWrapper}>
          <h5 style={{ margin: 0 }}>Gusna</h5>
          <h6 style={{ margin: 0 }}>Admin</h6>
        </div>
      </div>
      <div style={{ overflowY: 'auto' }}>
        <div className={classes.titleWrapper}>
          <p style={{ margin: 0 }}>{open ? NavigationList.listInput.name : ''}</p>
        </div>
        <List>
          {
            NavigationList.listInput.list.map((item, index) => (
              <ListItemButton
                key={index}
                sx={{
                  '&:hover': {
                    backgroundColor: '#1d293a'
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    color: '#fff',
                    mr: open ? 1 : 'auto',
                    justifyContent: 'center'
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{
                    opacity: open ? 1 : 0
                  }}
                />
              </ListItemButton>
            ))
          }
        </List>
        <div className={classes.titleWrapper}>
          <p>{open ? NavigationList.listDataDisplay.name : ''}</p>
        </div>
        <List>
          {
            NavigationList.listDataDisplay.list.map((item, index) => (
              <div key={index}>
                <ListItemButton
                  sx={{
                    '&:hover': {
                      backgroundColor: '#1d293a'
                    }
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      color: '#fff',
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center'
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{
                      opacity: open ? 1 : 0
                    }}
                  />
                </ListItemButton>
              </div>
            ))
          }
        </List>
        <div className={classes.titleWrapper}>
          <p>{open ? NavigationList.listFeedBack.name : ''}</p>
        </div>
        <List>
          {
            NavigationList.listFeedBack.list.map((item, index) => (
              <div key={index}>
                <ListItemButton
                  sx={{
                    '&:hover': {
                      backgroundColor: '#1d293a'
                    }
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      color: '#fff',
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center'
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{
                      opacity: open ? 1 : 0
                    }}
                  />
                </ListItemButton>
              </div>
            ))
          }
        </List>
        <div className={classes.titleWrapper}>
          <p>{open ? NavigationList.listSurface.name : ''}</p>
        </div>
        <List>
          {
            NavigationList.listSurface.list.map((item, index) => (
              <div key={index}>
                <ListItemButton
                  sx={{
                    '&:hover': {
                      backgroundColor: '#1d293a'
                    }
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      color: '#fff',
                      mr: open ? 1 : 'auto',
                      justifyContent: 'center'
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{
                      opacity: open ? 1 : 0
                    }}
                  />
                </ListItemButton>
              </div>
            ))
          }
        </List>
      </div>
    </DrawerWrapper>
  )
}

Drawer.propTypes = {
  open: PropTypes.bool,
  onDrawerClose: PropTypes.func,
  onDrawerOpen: PropTypes.func
}

export default Drawer
