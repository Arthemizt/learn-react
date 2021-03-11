import React, {Component} from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import ProductItem from './component/product/ProductItem';
import './App.css'

class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <ProductItem productName="Iphone" unitPrice="45000"/>
        <ProductItem productName="Ipad" unitPrice="49000"/>
        <ProductItem productName="Ipod" unitPrice="8900"/>
        <Footer company="PALADIN" email="paladin@gmail.com"/>
      </div>
    )
  }
}

export default App;
