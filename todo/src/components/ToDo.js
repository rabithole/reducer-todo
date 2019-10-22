import React from 'react';
import { useState, useEffect } from 'react';

function ToDo(props) {
	console.log(props);

	const [completed, setCompleted] = useState('completed', false);

	const toggleCompleted = () => {
		// if(props.id === props.id) {
		// 	setCompleted(!completed);	
		// }
		setCompleted(!completed);
	}

	return (
		<div>
			<p 
				key={props.index}
				className={completed ? 'completed' : 'notCompleted'}
				onClick={toggleCompleted}
			>
			{props.todo}
			</p>
		</div>
	)
		
}

export default ToDo;

 // {<div>{props.state.map((item,index) => (
	// 	    	<p 
	// 	    		key={index} 
	// 	    		className={completed ? 'completed' : 'notCompleted'}
	// 	    		onClick={toggleCompleted}
		    		
	// 	    	>{item.item}</p>
	// 	    ))}</div>}
