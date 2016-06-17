import React from 'react';
import Card from '../card'; // This is our component
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Card', module)
  .add('with a text', () => (
    <Card title="A little card" />
  ))
  .add('with a specific background', () => (
    <Card title="A little card" background={ '#55DD11' } />
  ));