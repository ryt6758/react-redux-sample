import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {

  render() {

    const todos = this.props.todoList.map(todo => {
      return (
        <React.Fragment>
          <div>{todo.title}</div>
          <div>{todo.body}</div>
        </React.Fragment>
      )
    })
    return (
      <div>{todos}</div>
    )
  }

}

const mapStateToProps = state => ({
  todoList: state.todoList
});



export default connect(mapStateToProps, null)(List);
