import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeConTainer from './component/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <CakeConTainer/>
    </div>
    </Provider>
    
  );
}

export default App;
