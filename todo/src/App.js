import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import TodoForm from './TodoForm';
import './App.css';

function App() {
	const [newTodo, setNewToDo] = useState();
	const [toDos, dispatch] = useReducer(reducer, initialState);

	const handleChanges = e => {
		setNewToDo(e.target.value);
		// console.log(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault();
		// dispatch('anothersdf');
		dispatch({ type: 'ADD_TODO', payload: newTodo  });
		console.log('submit confirm')
	}

	console.log(toDos);
	return (
		<div className="App">
		  <header className="App-header">
		    <TodoForm 
		    	handleSubmit={handleSubmit}
		    	handleChanges={handleChanges}
		    />
		 
		    <h3>{`To Do: ${toDos.item}`}</h3>
		    
		    
		  </header>
		</div>
	);
}

export default App;
