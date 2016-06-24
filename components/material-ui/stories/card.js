import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { storiesOf, action } from '@kadira/storybook';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import CardControlled from '../Card';

import FlatButton from 'material-ui/FlatButton';

import Toggle from 'material-ui/Toggle';

storiesOf('Card', module)
.add('Card components example', () => (
  <div>
    <MuiThemeProvider muiTheme={getMuiTheme({})} >
      <div>
        <Card>
          <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar="http://lorempixel.com/100/100/nature/"
          />
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
            <img src="http://lorempixel.com/600/337/nature/" />
          </CardMedia>
          <CardTitle title="Card title" subtitle="Card subtitle" />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>
      </div>
    </MuiThemeProvider>
  </div>
))
.add('Controlled example', () => (
  <div>
    <MuiThemeProvider muiTheme={getMuiTheme({})} >
      <div>
        <CardControlled>
        </CardControlled>
      </div>
    </MuiThemeProvider>
  </div>
));