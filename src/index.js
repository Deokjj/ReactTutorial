import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//root, everything inside it will be managed by ReactDOM
//App component is from App.js
ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();
