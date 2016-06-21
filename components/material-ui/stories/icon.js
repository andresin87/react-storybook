import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AlarmIcon from 'react-material-icons/icons/action/alarm';
import GiftCard from 'react-material-icons/icons/action/card-giftcard';
import Dashboard from 'react-material-icons/icons/action/dashboard';
import Backup from 'react-material-icons/icons/action/backup';

import {blue500, red500, greenA200} from 'material-ui/styles/colors';

import { storiesOf, action } from '@kadira/storybook';

storiesOf('Icon', module)
.add('AlarmIcon', () => (
  <div>
    <MuiThemeProvider
      muiTheme={getMuiTheme({})}
    >
      <AlarmIcon color={blue500}/>
    </MuiThemeProvider>
  </div>
))
.add('Dashboard', () => (
  <div>
    <MuiThemeProvider
      muiTheme={getMuiTheme({})}
    >
      <Dashboard color={red500}/>
    </MuiThemeProvider>
  </div>
))
.add('GiftCard', () => (
  <div>
    <MuiThemeProvider
      muiTheme={getMuiTheme({})}
    >
      <GiftCard color={greenA200}/>
    </MuiThemeProvider>
  </div>
))
.add('Backup', () => (
  <div>
    <MuiThemeProvider
      muiTheme={getMuiTheme({})}
    >
      <Backup color={greenA200}/>
    </MuiThemeProvider>
  </div>
));