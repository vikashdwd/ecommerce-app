import './App.css';
import Login from './Loginpage/Login.js';
import ReactRouter, { Route, Router, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ForgotPass from './Loginpage/ForgotPass';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (

    <BrowserRouter>
    <AnimatePresence exitBeforeEnter>
    <Routes>
    <Route path="/" element ={<Login/>}/>
    <Route path="/forgotpass" element ={<ForgotPass/>}/>

      </Routes>
      </AnimatePresence>

    </BrowserRouter>


  );
}

export default App;
