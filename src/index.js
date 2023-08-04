import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './Create';
import Explore from './Explore';
import Profile from './Profile';



function Insta() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/home' element={<App />} />
        <Route path='/create' element={<Create />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Insta />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
