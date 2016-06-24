import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { storiesOf, action } from '@kadira/storybook';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';

import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android'
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionGrade from 'material-ui/svg-icons/action/grade';
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
    opacity: 0
  }
};

const styles2 = {
  smallIcon: {
    width: 36,
    height: 36,
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
};

storiesOf('Button', module)
.add('Flat Button', () => (
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
))
.add('Raised Button', () => (
  <div>
    <MuiThemeProvider
      muiTheme={getMuiTheme({})}
    >
      <div>
        <h1>Simple Examples</h1>
        <RaisedButton label="Default" style={ {margin: 12} } />
        <RaisedButton label="Primary" primary={true} style={ {margin: 12} } />
        <RaisedButton label="Secondary" secondary={true} style={ {margin: 12} } />
        <RaisedButton label="Disabled" disabled={true} style={ {margin: 12} } />
        <h1>Complex Examples</h1>
        <RaisedButton
          label="Choose an Image"
          labelPosition="before"
          style={{margin: 12}}
        >
          <input type="file" style={styles.exampleImageInput} />
        </RaisedButton>
        <RaisedButton
          label="Label before"
          labelPosition="before"
          primary={true}
          icon={<ActionAndroid />}
          style={{margin: 12}}
        />
        <RaisedButton
          label="Github Link"
          linkButton={true}
          href="https://github.com/callemall/material-ui"
          secondary={true}
          style={{margin: 12}}
          icon={<FontIcon className="muidocs-icon-custom-github" />}
        />
        <h1>Icon Examples</h1>
        <RaisedButton
          icon={<ActionAndroid />}
          style={{margin: 12}}
        />
        <RaisedButton
          backgroundColor="#a4c639"
          icon={<ActionAndroid color={fullWhite} />}
          style={{margin: 12}}
        />
        <RaisedButton
          linkButton={true}
          href="https://github.com/callemall/material-ui"
          secondary={true}
          icon={<FontIcon className="muidocs-icon-custom-github" />}
          style={{margin: 12}}
        />
      </div>
    </MuiThemeProvider>
  </div>
))
.add('Floating Action Button', () => (
  <div>
    <MuiThemeProvider
      muiTheme={getMuiTheme({})}
    >
      <div>
        <FloatingActionButton style={{marginRight: 20}}>
          <ContentAdd />
        </FloatingActionButton>

        <FloatingActionButton mini={true} style={{marginRight: 20}}>
          <ContentAdd />
        </FloatingActionButton>

        <FloatingActionButton secondary={true} style={{marginRight: 20}}>
          <ContentAdd />
        </FloatingActionButton>

        <FloatingActionButton mini={true} secondary={true} style={{marginRight: 20}}>
          <ContentAdd />
        </FloatingActionButton>

        <FloatingActionButton disabled={true} style={{marginRight: 20}}>
          <ContentAdd />
        </FloatingActionButton>

        <FloatingActionButton mini={true} disabled={true} style={{marginRight: 20}}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    </MuiThemeProvider>
  </div>
))
.add('Icon Button', () => (
  <div>
    <MuiThemeProvider
      muiTheme={getMuiTheme({})}
    >
      <div>
        <h1>Simple example</h1>
        <IconButton iconClassName="muidocs-icon-custom-github" />
        <IconButton iconClassName="muidocs-icon-custom-github" disabled={true} />
        <h1>Further Examples</h1>
        <IconButton tooltip="Font Icon">
          <FontIcon className="muidocs-icon-action-home" />
        </IconButton>

        <IconButton tooltip="SVG Icon">
          <ActionHome />
        </IconButton>

        <IconButton
          iconClassName="material-icons"
          tooltip="Ligature"
        >
          home
        </IconButton>
        <h1>Size Examples</h1>
        <IconButton>
          <ActionHome />
        </IconButton>

        <IconButton
          iconStyle={styles2.smallIcon}
          style={styles2.small}
        >
          <ActionHome />
        </IconButton>

        <IconButton
          iconStyle={styles2.mediumIcon}
          style={styles2.medium}
        >
          <ActionHome />
        </IconButton>

        <IconButton
          iconStyle={styles2.largeIcon}
          style={styles2.large}
        >
          <ActionHome />
        </IconButton>
        <h1>Tooltip Examples</h1>
        <IconButton
          iconClassName="muidocs-icon-custom-github" tooltip="bottom-right"
          tooltipPosition="bottom-right"
        />
        <IconButton
          iconClassName="muidocs-icon-custom-github" tooltip="bottom-center"
          tooltipPosition="bottom-center"
        />
        <IconButton
          iconClassName="muidocs-icon-custom-github" tooltip="bottom-left"
          tooltipPosition="bottom-left"
        />
        <IconButton
          iconClassName="muidocs-icon-custom-github" tooltip="top-right"
          tooltipPosition="top-right"
        />
        <IconButton
          iconClassName="muidocs-icon-custom-github" tooltip="top-center"
          tooltipPosition="top-center"
        />
        <IconButton
          iconClassName="muidocs-icon-custom-github" tooltip="top-left"
          tooltipPosition="top-left"
        />
        <h1>Touch Example</h1>
        <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right">
          <ActionGrade />
        </IconButton>
        <IconButton tooltip="bottom-center" touch={true} tooltipPosition="bottom-center">
          <ActionGrade />
        </IconButton>
        <IconButton tooltip="bottom-left" touch={true} tooltipPosition="bottom-left">
          <ActionGrade />
        </IconButton>
        <IconButton tooltip="top-right" touch={true} tooltipPosition="top-right">
          <ActionGrade />
        </IconButton>
        <IconButton tooltip="top-center" touch={true} tooltipPosition="top-center">
          <ActionGrade />
        </IconButton>
        <IconButton tooltip="top-left" touch={true} tooltipPosition="top-left">
          <ActionGrade />
        </IconButton>
      </div>
    </MuiThemeProvider>
  </div>
));