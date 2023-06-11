import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import thunkMiddleware from 'redux-thunk'
import {signInAPI} from './actions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
          <div>
            <img src="google.jpg" />
          </div>
      </header>
    </div>
  );
}

export default App;
