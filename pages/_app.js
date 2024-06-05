import React from 'react';
import '@/styles/globals.css';
import Sidebar from '../components/Sidebar';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../Redux/reducers';
import { data } from '../data/data';

// Creamos el store utilizando el rootReducer
const store = createStore(rootReducer);

store.dispatch({ type: 'SET_DATA', payload: data });

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
    </Provider>
  );
}
