import React, { Component } from 'react';
import { connect } from 'react-redux';
import { create } from '../actions';

class Input extends Component {
  state = {
    todo: ''
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <input type="text" placeholder="write..." onChange={e => {
            this.setState({ todo: e.target.value })
          }}></input>
          <button onClick={() => { this.props.create(this.state.todo) }}>done</button>
        </div>
        <div>{this.props.title}</div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  title: state.title
});
const mapDispatchToProps = dispatch => ({
  create: (value) => dispatch(create(value))
});
export default connect(mapStateToProps, mapDispatchToProps)(Input);
