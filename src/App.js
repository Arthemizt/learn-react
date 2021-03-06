import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css'
import Home from './containers/Home';
import About from './containers/About';
import Order from './containers/order/Order';


class App extends Component{

  renderRouter(){
    return(
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/orders" component={Order}/>
      </Switch>
    )
  }
/* exact ช่วยให้เรียกเฉพาะตัวนั้นเลย มีอย่างอื่นไม่ได้ */

  render(){
    return(
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;
