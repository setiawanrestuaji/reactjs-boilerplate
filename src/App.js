import React from 'react'
import AppRoute from './routes/'
import { Provider } from 'react-redux'
import store from './redux/store'
import './assets/css/style.css'

function App() {
  return (
    <Provider store={store}>
        <AppRoute/>
    </Provider>
  );
}

export default App;
