import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { storiesOf, action } from '@kadira/storybook';

import FlatButton from 'material-ui/FlatButton';

import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android'
import {fullWhite} from 'material-ui/styles/colors';

const styles = {
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

storiesOf('Button', module)
.add('Flat Button',() => (
  <div>
    <MuiThemeProvider
      muiTheme={getMuiTheme({})}
    >
      <div>
        <h1>Simple Examples</h1>
        <FlatButton label="Default" />
        <FlatButton label="Primary" primary={true} />
        <FlatButton label="Secondary" secondary={true} />
        <FlatButton label="Disabled" disabled={true} />
        <hr/>
        <h1>Complex Examples</h1>
        <FlatButton label="Choose an Image" labelPosition="before">
          <input type="file" style={styles.exampleImageInput} />
        </FlatButton>

        <FlatButton
          label="Label before"
          labelPosition="before"
          primary={true}
          style={styles.button}
          icon={<ActionAndroid />}
        />

        <FlatButton
          label="GitHub Link"
          linkButton={true}
          href="https://github.com/callemall/material-ui"
          secondary={true}
          icon={<FontIcon className="muidocs-icon-custom-github" />}
        />
        <hr/>
        <h1>Icon Examples</h1>
        <FlatButton
          icon={<ActionAndroid />}
          style={ {margin: 12} }
        />
        <FlatButton
          backgroundColor="#a4c639"
          hoverColor="#8AA62F"
          icon={<ActionAndroid color={fullWhite} />}
          style={ {margin: 12} }
        />
        <FlatButton
          linkButton={true}
          href="https://github.com/callemall/material-ui"
          secondary={true}
          icon={<FontIcon className="muidocs-icon-custom-github" />}
          style={ {margin: 12} }
        />
      </div>
    </MuiThemeProvider>
  </div>
));