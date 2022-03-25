import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './moduels';
import { composeWithDevTools } from "redux-devtools-extension";

//const store = createStore(combineReducers({reducer_cart, reducer_logIn}),composeWithDevTools());
const store = createStore(rootReducer,composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


