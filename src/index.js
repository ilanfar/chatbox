
import React from 'react';
import ReactDOM from 'react-dom'; //pour web et pas pour native
import './index.css';
import App from './App';
import Connexion from './components/Connexion'
import NotFound from './components/NotFound'
import * as serviceWorker from './serviceWorker';

//BrowserRouter -> dit qu'on veut utiliser react-router
//Switch -> indique quelle route prendre

import { BrowserRouter, Route, Switch } from 'react-router-dom'
//on reste sur la meme page mais l'url change
const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Connexion} />
      <Route  path='/pseudo/:pseudo' component={App} />
        <Route component={NotFound} />


    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<Root /> , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
