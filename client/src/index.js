import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { rootReducer } from './store/rootReducer';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider} from "react-redux";
import thunkMiddleware from 'redux-thunk'



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);