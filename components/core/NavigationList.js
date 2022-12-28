import React from "react"
import { Code } from "@mui/icons-material"

const NavigationList = {
  listInput: {
    name: 'Input',
    list: [
      {
        path: '/component-1',
        name: 'TextField',
        icon: <Code />
      },
      {
        path: '/component-2',
        name: 'Select',
        icon: <Code />
      },
      {
        path: '/component-3',
        name: 'Button',
        icon: <Code />
      },
      {
        path: '/component-4',
        name: 'Radio Group',
        icon: <Code />
      },
      {
        path: '/component-5',
        name: 'CheckBox',
        icon: <Code />
      }
    ]
  },
  listDataDisplay: {
    name: 'Data Display',
    list: [
      {
        path: '/component-1',
        name: 'Avatar',
        icon: <Code />
      },
      {
        path: '/component-2',
        name: 'Table',
        icon: <Code />
      },
      {
        path: '/component-3',
        name: 'Chip',
        icon: <Code />
      },
      {
        path: '/component-4',
        name: 'Badge',
        icon: <Code />
      }
    ]
  },
  listFeedBack: {
    name: 'Feedback',
    list: [
      {
        path: '/component-1',
        name: 'Alert',
        icon: <Code />
      },
      {
        path: '/component-2',
        name: 'Dalog',
        icon: <Code />
      },
      {
        path: '/component-3',
        name: 'Snackbar',
        icon: <Code />
      }
    ]
  },
  listSurface: {
    name: 'Surfaces',
    list: [
      {
        path: '/component-1',
        name: 'Card',
        icon: <Code />
      },
      {
        path: '/component-2',
        name: 'Paper',
        icon: <Code />
      }
    ]
  }
}

export default NavigationList