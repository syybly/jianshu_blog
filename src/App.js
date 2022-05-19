import React, {Component } from 'react';
import { GlobalStyle } from "./style";
import { GlobalStyles } from './statics/iconfont/iconfont.js';
import Header from './common/header/index';
import Home from'./pages/home';
import Login from './pages/login';
import Detail from'./pages/detail';
import store from './store';
import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

class  App extends Component{
  render () {
    return (
     
       <Provider store={store}>
         
       < GlobalStyle />
       <GlobalStyles />
       
       <BrowserRouter>
      
         
         <Header />
         <Route path='/' exact component={Home}></Route>
         <Route path='/login' exact component={Login}></Route>
         <Route path='/detail/:id' exact component={Detail}></Route>
       {/*  <Route path='/detail' exact component={Detail}></Route> */}
         </BrowserRouter>
         
       </Provider>
      
     
    );
  }
  }
  

export default App;
