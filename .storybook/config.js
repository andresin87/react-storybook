import { configure } from '@kadira/storybook';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

function loadStories() {
  require('../components/stories/');
}

configure(loadStories, module);
