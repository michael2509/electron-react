import React, { Component } from 'react';
import UsersContainer from '../../containers/users/UsersContainer';
import SingleUserContainer from '../../containers/single-user/SingleUserContainer'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div style={{ marginTop: 25 }}>
          <Switch>
            <Route exact path="/" component={UsersContainer} />
            <Route path="/user/:id" component={SingleUserContainer} />
          </Switch>
      </div>
    );
  }
}

export default App;
