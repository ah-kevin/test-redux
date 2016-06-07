import React from 'react';
import {Route, Router, Redirect, IndexRoute} from 'react-router';
import App from '../containers/App';
import Index from '../containers/Index';
import NotFound from '../containers/NotFound';
import TrainDate from '../containers/trainDate/trainDate';
import TrainDateHome from '../containers/trainDate/trainDateHome';
import TrainDateDetail from '../containers/trainDate/trainDateDetail';
import TrainList from '../containers/trainDate/trainList';

export default function routes (history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="trainDate" component={TrainDate} >
          <IndexRoute component={TrainDateHome}/>
          <Route path="detail" component={TrainDateDetail} />
          <Route path="list" component={TrainList} />
        </Route>
        <Route path="/404" component={NotFound}/>
        <Redirect from="*" to='/404'/>
      </Route>
    </Router>
  )
}


