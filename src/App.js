import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'

import Doc from './pages/Doc';
import About from './pages/About/About';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';
import SignUp from './pages/Sign/SignUp';
import SingIn from './pages/Sign/SingIn';


import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'
import Templates from './pages/Templates';


const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/doc' element={<Doc />} />
        <Route path='/templates' element={<Templates />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SingIn />} />
      </Routes>
      <Footer />
    </Router>
  )
};

export default App;
