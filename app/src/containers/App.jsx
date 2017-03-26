import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewTodo, toggleTodo, clearAll } from './../actions';
import TodoList from './../components/TodoList';

function mapStateToProps(state) {
	return { todoList: state };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		addNewTodo,
		toggleTodo,
		clearAll
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);