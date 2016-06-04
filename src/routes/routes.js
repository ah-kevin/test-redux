import React from 'react';
import {Route, Router,Redirect,IndexRoute} from 'react-router';
import App from '../containers/App';
import Index from '../containers/Index';
import NotFound from '../containers/NotFound';
import TrainDate from '../containers/trainDate';
export default function routes(history){
  return (
    <Router history={history} >
      <Route path="/" component={App}>
        {/*<IndexRoute component={Index}/>*/}
        <IndexRoute component={TrainDate}/>
        <Route path="trainDate" component={TrainDate}/>
        <Route path="/404" component={NotFound}/>
        <Redirect from="*" to='/404'/>
      </Route>
    </Router>
  )
}


