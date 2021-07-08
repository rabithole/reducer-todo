import React, { useState } from 'react';

function addToDoForm(props) {
	const [clear, formClear] = useState('');

	return (
		<div className="App">
		  <form onSubmit={props.handleSubmit} onSubmit={formClear}>
		  	<input 
		  		type='text'
		  		name='newTodo'
		  		value={clear}
		  		onChange={props.handleChanges}
		  		
		  	/>

		  	<button type='submit'>Add To Do</button>
		  	<button onClick={props.clear}>Clear Completed</button>
		  </form>
		</div>
	);
}

export default addToDoForm;