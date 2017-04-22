import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';
import RouteComponent from './RouteComponent';

injectTapEventPlugin();

ReactDOM.render(
  <RouteComponent />,
  document.getElementById('root')
);
