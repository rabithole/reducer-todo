import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import TodoForm from './components/TodoForm';
import ToDo from './components/ToDo';
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
		dispatch({ type: 'ADD_TODO', payload: newTodo });
		// console.log(state[0].input);

	}

	console.log(state);
	return (
		<div className="App">
		  <header className="App-header">
		    <TodoForm 
		    	handleSubmit={handleSubmit}
		    	handleChanges={handleChanges}
		    	// clear={state[0].input}
		    />
		    
			<ToDo 
				state={state}
			/>
		  </header>
		</div>
	);
}

export default App;

// {<div>{state.map((item,index) => (
// 		    	<p key={index}>{item.item}</p>
// 		    ))}</div>}
