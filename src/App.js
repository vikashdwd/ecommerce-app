//import logo from './logo.svg';
import './App.css';
import Login from './Loginpage/Login.js';
import ReactRouter, { Route, Router, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ForgotPass from './Loginpage/ForgotPass';
//import {Switch} from 'react-router-dom'

function App() {
  return (

    <BrowserRouter>
    <Routes>
    <Route path="/" element ={<Login/>}/>
    <Route path="/forgotpass" element ={<ForgotPass/>}/>

      </Routes>

    </BrowserRouter>


  );
}

export default App;
