import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AutoComplete from '../AutoComplete';

import { storiesOf, action } from '@kadira/storybook';

storiesOf('AutoComplete', module)
.add('Default', () => (
  <div>
    <MuiThemeProvider muiTheme={getMuiTheme({})} >
      <AutoComplete
        hintText="Type anything"
      />
    </MuiThemeProvider>
  </div>
))
.add('Full Width', () => (
  <div>
    <MuiThemeProvider muiTheme={getMuiTheme({})} >
      <AutoComplete
        hintText="Type anything"
        floatingLabelText="Full width"
        fullWidth={true}
      />
    </MuiThemeProvider>
  </div>
));