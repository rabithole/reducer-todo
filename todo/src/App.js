import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import TodoForm from './TodoForm';
import './App.css';

function App() {
	const [newTodo, setNewToDo] = useState();
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleChanges = e => {
		setNewToDo(e.target.value);
		// console.log(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault();
		// dispatching an action defined by the type
		dispatch({ type: 'ADD_TODO', payload: newTodo  });
		console.log('submit confirm')

	}

	console.log(state);
	return (
		<div className="App">
		  <header className="App-header">
		    <TodoForm 
		    	handleSubmit={handleSubmit}
		    	handleChanges={handleChanges}
		    />
		 
		    {<div>To Do: {state.map(item => (
		    	<p>{item.item}</p>
		    ))}</div>}
		    
		    
		  </header>
		</div>
	);
}

export default App;
