import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Parent from './parent';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Educator from './educator';
import Student from './student';

<title>Raccoon Rex's Journey of Internet Safety</title>

ReactDOM.render(
    <Router>

       <Routes>

        <Route path='/' element={<App/>} />
        <Route path="/Student" element={<Student />}></Route>
        <Route path="/Parent" element={<Parent />}></Route>
        <Route path="/Educator" element={<Educator />}></Route>

        </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
