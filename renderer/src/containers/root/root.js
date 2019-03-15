import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../configureStore'
import App from '../../components/app/App';

const users = window.ipcRenderer.sendSync('get-users');
const initialState = { single_user: {}, users: users };
const store = configureStore(initialState);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Root;