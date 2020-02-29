import React, { Component } from 'react';
import Input from '../components/Input';
import List from '../components/List';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Input />
        <List />
      </React.Fragment>
    )
  }
}

export default App;
