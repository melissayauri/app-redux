import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Users from './components/users/Users';
import Navbar from './components/navbar/Navbar'
const App = () => (
 <BrowserRouter>
 <Navbar/>
 <Route exat path='/' component={Users}/>
 </BrowserRouter>
)
export default App;
