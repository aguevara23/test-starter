import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Test1 from './Test1';
import Test2 from './Test2';
import Navbar from './Navbar'


const Main = () => (
  <div>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/test1' component={Test1}/>
    <Route path='/test2' component={Test2}/>
    </Switch>
  </div>
)

export default Main;
