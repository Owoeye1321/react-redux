import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeConTainer from './component/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HookCakeConTainer from './component/HookCakeContainer';
import IceCreamContainer from './component/IceCreamContainer';
import BuyBulkCakeContainer from './component/BuyBulkCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BuyBulkCakeContainer/>
        <HookCakeConTainer/>
      <CakeConTainer/>
      <IceCreamContainer/>
    </div>
    </Provider>
    
  );
}

export default App;
