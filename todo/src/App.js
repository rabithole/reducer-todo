import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import TodoForm from './components/TodoForm';
import ToDo from './components/ToDo';
import './App.css';

function App() {
	const [newTodo, setNewToDo] = useState();
	// const [clear, setClear] = useState('');
	const [state, dispatch] = useReducer(reducer, initialState);
	// const [completed, setCompleted] = useState('completed', false);

	const handleChanges = e => {
		setNewToDo(e.target.value);
		// console.log(e.target.value)
		// setClear('');
	}

	const handleSubmit = e => {
		e.preventDefault();
		// dispatching an action defined by the type
		dispatch({ type: 'ADD_TODO', payload: newTodo });

	}

	const toggleCompleted = (clickId) => {
		state.map(item => {
			// console.log(item.id);
			// console.log(clickId);
			if(clickId === item.id) {
				// setCompleted(!completed);
				console.log(item.id, clickId)
				dispatch({ type: 'TOGGLE_COMPLETED'})
			} 
			return 
		})
	}

	// console.log(state);
	return (
		<div className="App">
		  <header className="App-header">
		    <TodoForm 
		    	handleSubmit={handleSubmit}
		    	handleChanges={handleChanges}
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

// {<div>{state.map((item,index) => (
// 		    	<p key={index}>{item.item}</p>
// 		    ))}</div>}
