const uid = () => Math.random().toString(10).slice(2);

export const addNewTodo = (text) => {
	return {
		type: 'ADD_NEW_TODO',
		payload: {
			id: uid(),
			isComplete: false,
			text
		}
	}
};

export const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		payload: {
			id
		}
	}
};
