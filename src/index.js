import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//CONTADOR//
let i = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;
let i5 = 0;
let i6 = 0;

let reloj = setInterval(function() {
  i ++;
  i2 = Math.floor(i/10);
  i3 = Math.floor(i/100);
  i4 = Math.floor(i/1000);
  i5 = Math.floor(i/10000);
  i6 = Math.floor(i/100000)
  ////
  ReactDOM.render(
    <React.StrictMode>
      <App counter={i} counter2={i2} counter3={i3} counter4={i4} counter5={i5} counter6={i6}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  ///
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
