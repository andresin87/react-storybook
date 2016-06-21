import React from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import UploadIcon from 'material-ui/svg-icons/file/cloud-upload';
import FolderIcon from 'material-ui/svg-icons/file/folder-open';

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
))
.add('Further Examples', () => (
  <div>
    <MuiThemeProvider
      muiTheme={getMuiTheme({})}
    >
      <div>
        <Badge
          badgeContent={<IconButton tooltip="Backup"><UploadIcon /></IconButton>}
        >
          <FolderIcon />
        </Badge>
        <Badge
          badgeContent="&copy;"
          badgeStyle={{fontSize: 20}}
        >
          Company Name
        </Badge>
      </div>
    </MuiThemeProvider>
  </div>
));