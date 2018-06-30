import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Login/>, document.getElementById('root'));
registerServiceWorker();
