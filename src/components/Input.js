import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <input type="text" placeholder="write..."></input>
          <button>done</button>
        </div>
      </React.Fragment>
    )
  }
}

export default Input;
