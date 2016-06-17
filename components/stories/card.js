'use strict';

import React from 'react';
import Card from '../card';
import {storiesOf, action} from '@kadire/storybook';

storiesOf('Card', module)
  .add('with a text', () => (
    <card title="A little card"/>
));
