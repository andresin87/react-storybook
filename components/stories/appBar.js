import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Appbar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import BaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { storiesOf, action } from '@kadira/storybook';

console.log(BaseTheme);

storiesOf('Appbar', module)
.add('Default', () => (
  <div>
    <MuiThemeProvider muiTheme={getMuiTheme({})} >
      <Appbar
        title="Default Appbar Primary1"
      />
    </MuiThemeProvider>
    <MuiThemeProvider
      muiTheme={getMuiTheme({
        palette: {
          primary1Color: BaseTheme.palette.primary2Color
        }
      })}
    >
      <Appbar
        title="Default Appbar Primary2"
      />
    </MuiThemeProvider>
    <MuiThemeProvider
    muiTheme={getMuiTheme({
        palette: {
          primary1Color: BaseTheme.palette.primary3Color
        }
      })}
  >
    <Appbar title="Default Appbar Primary3" />
  </MuiThemeProvider>
  </div>
))
.add('Buttons', () => (
  <div>
    <MuiThemeProvider muiTheme={getMuiTheme({})} >
      <Appbar
        title={
          <span style={
            {
              cursor: 'pointer'
            }
          }>Title</span>
        }
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        iconElementRight={<FlatButton label="Save" />}
      />
    </MuiThemeProvider>
  </div>
))
.add('Icon Menu', () => (
  <div>
    <MuiThemeProvider muiTheme={getMuiTheme({})} >
      <Appbar
        title="Title"
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
        }
      />
    </MuiThemeProvider>
  </div>
));