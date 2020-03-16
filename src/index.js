import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import Header from './Header';


ReactDOM.render(
    <div>
      <Header />
      <div>
      <App />
    </div>
    </div>, 
    document.getElementById('nav')
)


  
