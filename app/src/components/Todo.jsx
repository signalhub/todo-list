import React, { Component, PropTypes } from 'react';

const propTypes = {
	todoItem: PropTypes.object
};

class Todo extends Component {

	render() {
		const { todoItem } = this.props;
		return(
			<div className="b-item-todo">
				{todoItem.get('isComplete') ?
					<strike>{todoItem.get('text')}</strike>
					:
					<span>{todoItem.get('text')}</span>
				}
			</div>
		)
	}
}

Todo.PropTypes = propTypes;

export default Todo;
