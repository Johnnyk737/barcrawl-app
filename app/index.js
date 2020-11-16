import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { renderRoutes } from "react-router-config";

import  {Main } from './components/Main'
import ErrorPage from './components/ErrorPage'
import Crawl from './components/crawl/Crawl';
// import routes from './routes'
// import 'bootstrap/dist/css/bootstrap.min.css';

let app = document.getElementById("app");

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/crawl' component={Crawl} />

        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  </div>
  , app
);  
