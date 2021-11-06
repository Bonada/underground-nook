import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export { default as PreLogin_Navigation } from "./Components/PreLogin_Navigation";
export { default as PostLogin_Navigation } from "./Components/PostLogin_Navigation";
export { default as Admin_Navigation } from "./Components/Admin_Navigation";
export { default as Navigation } from "./Components/Navigation";
export { default as About } from "./Pages/About";
export { default as Cart } from "./Pages/Cart";
export { default as Catalog } from "./Pages/Catalog";
export { default as Home } from "./Pages/Home";
export { default as Orders } from "./Pages/Orders";
export { default as Settings } from "./Pages/Settings";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
