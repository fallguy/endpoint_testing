import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import './index.css';
import Home from './Home';
import NotificationApp from './NotificationApp';
import SurveyApp from './SurveyApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path="/notifications" component={NotificationApp} />
      <Route path="/surveys" component={SurveyApp} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker();
