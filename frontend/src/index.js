/* File Root */

/* Import Library React */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"

/* Import Class */
import App from './App'; 

/* Import Bootstrap */
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"

/* Router */
ReactDOM.render(  // Melakukan render terhadap reactDOM
  <BrowserRouter>
  {/* Memanggil element yang dikirim */}
    <App /> {/* Memanggil Class App */}
  </BrowserRouter>,
  document.getElementById('root') // Mengambil berdasarkan id root (di index.html)
);
