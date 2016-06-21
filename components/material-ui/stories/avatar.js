import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Avatar from 'material-ui/Avatar';
import Person from 'react-material-icons/icons/social/person';
import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors'

import { storiesOf, action } from '@kadira/storybook';

storiesOf('Avatar', module)
.add('Default', () => (
  <div>
    <MuiThemeProvider muiTheme={getMuiTheme({})} >
      <Avatar src="https://randomuser.me/api/portraits/women/48.jpg" />
    </MuiThemeProvider>
  </div>
))
.add('Icon', () => (
  <div>
    <MuiThemeProvider muiTheme={getMuiTheme({})} >
      <Avatar
        icon={<Person />}
        color={orange200}
        backgroundColor={indigo900}
        size={30}
      />
    </MuiThemeProvider>
  </div>
));