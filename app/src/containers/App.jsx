import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewTodo, toggleTodo } from './../actions';
import TodoList from './../components/TodoList';

function mapStateToProps(state) {
	return { todoList: state };
}

function mapDispatchToProps(dispatch) {
	return {
		addNewTodo: text => dispatch(addNewTodo(text)),
		toggleTodo: id => dispatch(toggleTodo(id))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);