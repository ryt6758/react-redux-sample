import React, { Component } from 'react';
import { connect } from 'react-redux';
import { create } from '../actions';

class Input extends Component {
  getText() {
    const targetTitleDOMs = document.getElementsByName('title');
    const targetBodyDOMs = document.getElementsByName('body');
    return {
      title: targetTitleDOMs[0].value,
      body: targetBodyDOMs[0].value
    }
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <input type="text" placeholder="write..." name="title"></input>
          <input type="text" placeholder="write..." name="body"></input>
          <button onClick={() => this.props.create(this.getText())}>done</button>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  title: state.todoList.title,
  body: state.todoList.body
});
const mapDispatchToProps = dispatch => ({
  create: (value) => dispatch(create(value))
});
export default connect(mapStateToProps, mapDispatchToProps)(Input);
