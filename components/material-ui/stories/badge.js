import React from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { storiesOf, action } from '@kadira/storybook';

storiesOf('Badge', module)
.add('Simple', () => (
  <div>
    <MuiThemeProvider
      muiTheme={getMuiTheme({})}
    >
      <div>
        <Badge
          badgeContent={4}
          primary={true}
        >
          <NotificationsIcon />
        </Badge>
        <Badge
          badgeContent={10}
          secondary={true}
          badgeStyle={{top: 12, right: 12}}
        >
          <IconButton tooltip="Notifications">
            <NotificationsIcon />
          </IconButton>
        </Badge>
      </div>
    </MuiThemeProvider>
  </div>
));