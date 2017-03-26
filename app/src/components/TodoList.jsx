import React, {Component, PropTypes} from 'react';
import Todo from './Todo';
import './styles.styl'


const propTypes = {
	todoList: PropTypes.array,
	addNewTodo: PropTypes.func,
	toggleTodo: PropTypes.func
};

class TodoList extends Component {

	render() {
		const {todoList, addNewTodo, toggleTodo} = this.props;
		const onSubmit = (event) => {
			const input = event.target;
			const text = input.value;
			const isEnterKey = (event.which == 13);
			if (isEnterKey && text.length > 0) {
				addNewTodo(text);
				input.value = '';
			}
		};

		const toggleClick = (id) => event => toggleTodo(id);

		return (
			<div className="b-main">
				<h1>TODO LIST</h1>

				<div className="b-todo-list">
					<input type='text'
						   className='todo-list-input'
						   placeholder='Add todo'
						   onKeyDown={onSubmit}/>
					<ul>
						{todoList.map(todo => (
							<li key={todo.get('id')}
								onClick={toggleClick(todo.get('id'))}>
								<Todo todoItem={todo}/>
							</li>
						))}
					</ul>
				</div>
			</div>
		)
	}
}

TodoList.PropTypes = propTypes;

export default TodoList;