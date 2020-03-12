import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { del, update } from '../actions';

class List extends Component {
  deletePost(e) {
    const targetDeleteDOM = e.target.parentNode;
    const deletePostId = targetDeleteDOM.dataset.postId;
    return (deletePostId);
  }
  render() {
    const todos = _.map(this.props.todoList, todo => {
      return (
        <div data-post-id={todo.id} key={todo.id}>
          <label htmlFor="todoTitle">Title：</label><input defaultValue={todo.title} id="todoTitle" />
          <label htmlFor="todoBody">Body：</label><input defaultValue={todo.body} id="todoBody" />
          <button onClick={(e) => { this.props.delete(this.deletePost(e)); }}>del</button>
        </div>
      )
    })
    return (
      <React.Fragment>{todos}</React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  todoList: state.todoList
});

const mapDispatchToProps = dispatch => ({
  delete: postId => dispatch(del(postId)),
  update: value => dispatch(update(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
