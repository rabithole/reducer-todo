import React from 'react';

function addToDoForm(props) {
	// const [toDos, addToDo] = useReducer(reducer, initialState);
console.log(props.clear);
	return (
		<div className="App">
		  <form onSubmit={props.handleSubmit}>
		  	<input 
		  		type='text'
		  		name='newTodo'
		  		placeholder={props.clear}
		  		onChange={props.handleChanges}
		  		
		  	/>

		  	<button type='submit'>Add To Do</button>
		  </form>
		</div>
	);
}

export default addToDoForm;