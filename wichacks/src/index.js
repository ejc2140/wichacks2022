import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Parent from './parent';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Educator from './educator';
import Student from './Student/main';
import About from './about';
import Book1 from './Student/book1';
import Book2 from './Student/book2';
import Book1_Part2_Right from './Student/book1_part2_right';
import Book1_Part2_Wrong from './Student/book1_part2_wrong';
import Book1_Recap_Right from './Student/book1_recap_right';
import Book1_Recap_Wrong from './Student/book1_recap_wrong';

ReactDOM.render(
    <Router>

       <Routes>

        <Route path='/' element={<App/>} />
        <Route path="/Student" element={<Student />}></Route>
        <Route path="/Parent" element={<Parent />}></Route>
        <Route path="/Educator" element={<Educator />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Book1" element={<Book1 />}></Route>
        <Route path="/Book2" element={<Book2 />}></Route>
        <Route path="/Book1_Part2_Right" element={<Book1_Part2_Right />}></Route>
        <Route path="/Book1_Part2_Wrong" element={<Book1_Part2_Wrong />}></Route>
        <Route path="/Book1_Recap_Right" element={<Book1_Recap_Right />}></Route>
        <Route path="/Book1_Recap_Wrong" element={<Book1_Recap_Wrong />}></Route>

        </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
