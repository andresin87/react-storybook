import React from 'react';
import { Card } from '../card'; // our card component
import {storiesOf, action} from '@kadira/storybook';

storiesOf('Card', module)
  .add('with a text', () => (
    <card title="A little card"/>
));
