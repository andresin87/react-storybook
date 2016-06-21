import React from 'react';
import FontIcon from 'material-ui/FontIcon';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AlarmIcon from 'react-material-icons/icons/action/alarm';
import GiftCard from 'react-material-icons/icons/action/card-giftcard';
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
.add('GiftCard', () => (
  <div>
    <MuiThemeProvider
      muiTheme={getMuiTheme({})}
    >
      <GiftCard color={red500}/>
    </MuiThemeProvider>
  </div>
));