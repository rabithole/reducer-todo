import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import TodoForm from './components/TodoForm';
import ToDo from './components/ToDo';
import './App.css';

function App() {
	const [newTodo, setNewToDo] = useState();
	const [state, dispatch] = useReducer(reducer, initialState);
	// const [completed, setCompleted] = useState('completed', false);

	const handleChanges = e => {
		setNewToDo(e.target.value);
	}

	const handleSubmit = e => {
		e.preventDefault();
		// dispatching an action defined by the type
		dispatch({ type: 'ADD_TODO', payload: newTodo });
	}

	const toggleCompleted = (clickId) => {
			// Dispathing an action.
					// Action object below. Type and payload
		dispatch({ type: 'TOGGLE_COMPLETED', payload: clickId})
		// console.log(clickId, state)
	}

	const clearCompleted = e => {
		// console.log('clear')
		e.preventDefault();
		dispatch({ type: 'CLEAR_COMPLETED' })
	}

	return (
		<div className="App">
		  <header className="App-header">
		    <TodoForm 
		    	handleSubmit={handleSubmit}
		    	handleChanges={handleChanges}
		    	clear={clearCompleted}
		    />

			<ToDo 
				state={state}
				toggleCompleted={toggleCompleted}
			/>
		  </header>
		</div>
	);
}

export default App;
