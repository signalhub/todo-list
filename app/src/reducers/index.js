import { Map, List } from 'immutable';

const initList = List([]);

export default function reducer(todoList = initList, action) {
	switch (action.type) {
		case 'ADD_NEW_TODO':
			return todoList.push(Map(action.payload));
		case 'TOGGLE_TODO':
			return todoList.map(todo => {
				if(todo.get('id') === action.payload.id) {
					return todo.update('isComplete', isComplete => !isComplete);
				} else {
					return todo;
				}
			});
		case 'CLEAR_ALL':
			return initList;
		default:
			return todoList;
	}
}

